import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';

//collect all the files from the blogdata directory
//iterate through them and display them
const Blog = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
            
            <div className={styles.blogItem}>
              <Link href={'/blogpost/learn-javascript'}>
                <h2>How to learn Javascript in 2022?</h2>
              </Link>
              <p>Javascript is the premier language used for web development.</p>
            </div>
            <div className={styles.blogItem}>
              <h2>How to learn Javascript in 2022?</h2>
              <p>Javascript is the premier language used for web development.</p>
            </div>
            <div className={styles.blogItem}>
              <h2>How to learn Javascript in 2022?</h2>
              <p>Javascript is the premier language used for web development.</p>
            </div>
      </div>
    </main>
  )
}

export default Blog