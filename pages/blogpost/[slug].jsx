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
    // paths: [
    //   { params: {slug: 'how-to-learn-cpp'} },
    //   { params: {slug: 'how-to-learn-java'} },
    //   { params: {slug: 'how-to-learn-nextjs'} },
    //   { params: {slug: 'how-to-learn-python'} }
    // ],
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

//server side rendering pattern
// export async function getServerSideProps(context) {

//   console.log(context.params.slug)
//   let dataFromFetch = await fetch(`http://localhost:3000/api/getblog?slug=${context.params.slug}`)
//   let parsedData = {title: "Error : 404", content: "Looks like this blog has not been written yet!", slug: "Not-found-error"}
//   if(dataFromFetch.status === 200)
//     parsedData = await dataFromFetch.json()
// return {
//   props: { blog: parsedData }, // will be passed to the page component as props
// }
// }


const Slug = (props) => {
  const createMarkup = (content) => {
    return {__html: content};
  }
  
  // const router = useRouter();
  // //console.log(router)
  //console.log(props.blog)
  const [blog, setBlog] = useState(props.blog)
  // useEffect(() => {
  //   if(!router.isReady) return; // this was required because of async nature of js due to which the getblog api was being called with an undefined slug as router was not ready yet
  //   //console.log("use effect is working")
  //   const {slug} = router.query;
  //   const fetchData = async() => {
  //     //console.log(slug)
  //     let dataFromFetch = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     //console.log(dataFromFetch,"_------------------------------")
  //     if(dataFromFetch.status !== 200 ){
  //        setBlog({title: "Error : 404", content: "Looks like this blog has not been written yet!"})
  //       return;
  //     }
        
  //     let parsedData = await dataFromFetch.json()
  //     setBlog(parsedData)
  //   }
  //   fetchData();
  // }, [router.isReady]) //just means that whenever router state chjanges rerun the effect


  return (
    blog && <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog.title}</h1>
        <hr />
        <div dangerouslySetInnerHTML={createMarkup(blog.content)} />
      </main>  
    </div>
  );
};

export default Slug;