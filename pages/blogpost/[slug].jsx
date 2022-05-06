import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import { readFile, readdir } from 'fs/promises';
import { join } from 'path';
//find the file corresponding to the given slug
//populate the content

//static site generation pattern
export async function getStaticPaths() {
  let blogPaths = []
  const blogRepo = "blogdata"
  let data = await readdir(blogRepo);
  for(const element of data) {
    let theFile = await readFile(join(blogRepo,element), 'utf-8');
    blogPaths.push({params : {slug: JSON.parse(theFile).slug}})

  } 
  return {

    paths: blogPaths,
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps(context) {

  let blogData = await readFile(`blogdata/${context.params.slug}.json`, 'utf8');
  let parsedData = await JSON.parse(blogData);
return {
  props: { blog: parsedData }, // will be passed to the page component as props
}
}




const Slug = (props) => {
  const createMarkup = (content) => {
    return {__html: content};
  }
  

  const [blog, setBlog] = useState(props.blog)
  

  return (
    blog && <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog.title}</h1>
        {/* <hr /> */}
        <div dangerouslySetInnerHTML={createMarkup(blog.content)} className={styles.blogContent}/>
      </main>  
    </div>
  );
};

export default Slug;