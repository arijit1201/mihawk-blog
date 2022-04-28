import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

//find the file corresponding to the given slug
//populate the content
const slug = () => {
  const router = useRouter();
  console.log(router)
  const [blog, setBlog] = useState([])
  useEffect(() => {
    if(!router.isReady) return; // this was required because of async nature of js due to which the getblog api was being called with an undefined slug as router was not ready yet
    console.log("use effect is working")
    const {slug} = router.query;
    const fetchData = async() => {
      console.log(slug)
      let dataFromFetch = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      console.log(dataFromFetch,"_------------------------------")
      if(dataFromFetch.status !== 200 ){
         setBlog({title: "Error : 404", content: "Looks like this blog has not been written yet!"})
        return;
      }
        
      let parsedData = await dataFromFetch.json()
      setBlog(parsedData)
    }
    fetchData();
  }, [router.isReady]) //just means that whenever router state chjanges rerun the effect


  return (
    blog && <div className={styles.container}>
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