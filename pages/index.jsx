import Head from 'next/head'
// import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      {/* Note - to use styled jsx, you need to add  styled-jsx package
      <style jsx>
        {
          `
            .blogTitle{
              font-size: 2.rem;
            }
            .blogItem h3{
              font-size: 1.5rem;
            }
            .blogItem p{
              font-size: 1rem;
            }
          `
        }
      </style> */}
      <Head>
        <title>Codewalker Saga</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="next, nextblog, codewalker saga" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>


      {/* <Script src='/sc.js' strategy='lazyOnload'></Script> */}
      <main className={styles.main}>
        <div className={styles.imgWrap}>
          {/* <Image className={styles.mainImg} src='/home.jpg' width={400} height={250}/> */}
          <img className={styles.mainImg} src='/home.jpg' alt='Mihawk Blog'></img>
        </div>
        <h1 className={styles.title}>
          &lt;The CodeWalker Blog/&gt;
        </h1>
        <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores consequuntur quasi dolore quo. Consequatur ea iusto beatae, doloremque culpa voluptas.</p>

        <div className="blogs">
          <h2 className={styles.blogTitle}>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2022?</h3>
            <p>Javascript is the premier language used for web development.</p>
            <button class={styles.btn}>Read More</button>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2022?</h3>
            <p>Javascript is the premier language used for web development.</p>
            <button class={styles.btn}>Read More</button>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2022?</h3>
            <p>Javascript is the premier language used for web development.</p>
            <button class={styles.btn}>Read More</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
