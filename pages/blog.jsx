import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import InfiniteScroll from 'react-infinite-scroll-component'

//static site generation pattern
export async function getStaticProps(context) {

  const blogRepo = "blogdata"
  let data = await readdir(blogRepo);
  let allCount = data.length
  let theFile
  let allBlogs = []
  // for (const element of data) {
  for (let index = 0; index < 3; index++) {
    const item = data[index]
    theFile = await readFile(join(blogRepo, item), 'utf-8')
    allBlogs.push(JSON.parse(theFile))
  }
  // let theFile = await readFile(join(blogRepo, element), 'utf-8');
  // allBlogs.push(JSON.parse(theFile))

  //}
  return {
    props: { allBlogs, allCount }, // will be passed to the page component as props
  }
}


//server side rendering
// export async function getServerSideProps(context) {

//     let fetchedData  = await fetch('http://localhost:3000/api/blogs')
//     let parsedData = [
//       {
//         title: "Internal Server Error",
//         content: "We are facing some technical difficulties - please try again.",
//         slug: "Internal-Server-Error"
//       }
//     ]
//     if(fetchedData.status===200)
//       parsedData = await fetchedData.json();




//   return {
//     props: { blogs: parsedData}, // will be passed to the page component as props
//   }
// }

//collect all the files from the blogdata directory
//iterate through them and display them
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)
  const [count, setCount] = useState(3)

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs?count=${count + 1}`)
    setCount(count + 1)
    let data = await d.json()
    setBlogs(data)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Reached the end of the currently published blogs</b>
            </p>
          }>
          {blogs.map((blogItem) => {
            return (
              <div key={blogItem.slug} className={styles.blogItem}>
                <Link href={`/blogpost/${blogItem.slug}`}>
                  <h3>{blogItem.title}</h3>
                </Link>
                {/* <p>{blog.content.substr(0, 140).concat("...")}</p> */}
                <p>{blogItem.metadesc.substr(0, 140).concat("...")}</p>
                <Link href={`/blogpost/${blogItem.slug}`}><button className={styles.btn}>Read More</button></Link>
              </div>)

          })}
        </InfiniteScroll>
      </main>
    </div>
  )
}

export default Blog