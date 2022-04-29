import React, {useEffect, useState} from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';

//server side rendering
export async function getServerSideProps(context) {

    let fetchedData  = await fetch('http://localhost:3000/api/blogs')
    let parsedData = [
      {
        title: "Internal Server Error",
        content: "We are facing some technical difficulties - please try again.",
        slug: "Internal-Server-Error"
      }
    ]
    if(fetchedData.status===200)
      parsedData = await fetchedData.json();
   

    

  return {
    props: { blogs: parsedData}, // will be passed to the page component as props
  }
}

//collect all the files from the blogdata directory
//iterate through them and display them
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.blogs)
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          {blogs.map( (blog) => {
              return (
                <div key={blog.slug} className={styles.blogItem}>
                  <Link href={`/blogpost/${blog.slug}`}>
                  <h3>{blog.title}</h3>
                  </Link>
                  <p>{blog.content.substr(0, 140).concat("...")}</p>
                </div>)
              
          })}
      </main>
    </div>
  )
}

export default Blog