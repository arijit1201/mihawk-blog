import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

//find the file corresponding to the given slug
//populate the content
const slug = () => {
  const router = useRouter();
  console.log(router)
  const {slug} = router.query;
  const [blog, setBlog] = useState([])
  useEffect(() => {
    console.log("use effect is working")
    const fetchData = async() => {
      console.log(slug)
      let dataFromFetch = await (await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)).json()
      setBlog(dataFromFetch)
    }
    fetchData();


  }, [])


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog.title}</h1>
        <hr />
        <div>
          {blog.content}
        </div>
      </main>  
    </div>
  );
};

export default slug;