import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codewalker Saga</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="next, nextblog, codewalker saga" />
      </Head>

      <main className={styles.main}>
        <div className={styles.imgWrap}>
          <img
            className={styles.mainImg}
            src="/home.jpg"
            alt="Mihawk Blog"
          ></img>
        </div>
        <h1 className={styles.title}>&lt;The CodeWalker Blog/&gt;</h1>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          consequuntur quasi dolore quo. Consequatur ea iusto beatae, doloremque
          culpa voluptas.
        </p>

        <div className="blogs">
          <h2 className={styles.blogTitle}>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2022?</h3>
            <p>Javascript is the premier language used for web development.</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2022?</h3>
            <p>Javascript is the premier language used for web development.</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2022?</h3>
            <p>Javascript is the premier language used for web development.</p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
