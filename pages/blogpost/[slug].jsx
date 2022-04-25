import React from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

//find the file corresponding to the given slug
//populate the content
const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, enim, quos odit ipsum ad autem nesciunt a totam similique ex neque? Facilis harum distinctio quia magnam labore, cum repudiandae optio corporis quod mollitia veniam veritatis nihil totam laboriosam nesciunt rerum a voluptatibus! Sapiente, tenetur vel.
        </div>
      </main>  
    </div>
  );
};

export default slug;