import React, {useEffect, useState} from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';

//collect all the files from the blogdata directory
//iterate through them and display them
const Blog = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    console.log("use effect is working")
    fetch('http://localhost:3000/api/blogs')
    .then((dataFromFetch) => {
      return dataFromFetch.json();
    })
    .then((parsedData) => {
      console.log(parsedData)
      setBlogs(parsedData)
    })
// the above pattern is promise...then pattern
    {/*
    The below pattern is await async pattern for the same use
      const fetchData = async() => {
      let dataFromFetch = await (await fetch('http://localhost:3000/api/blogs')).json()
      //let parsedData = await dataFromFetch.json()
      console.log(dataFromFetch)
    }
    fetchData();

  */}

  }, [])
  
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