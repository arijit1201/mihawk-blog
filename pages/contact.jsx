import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'


const Contact = () => {

  async function postData(url = '', data = {}) {
    ;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [comment, setcomment] = useState('')
  const [label, setlabel] = useState('')



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, email, comment };
    if (!(name.trim()) || !(email.trim()) || !(comment.trim())) {
      setlabel("Please complete all the fields.")
      setTimeout(() => {
        setlabel('')
      }, 3000);
    }
    else {
      try {
        postData("http://localhost:3000/api/postcontact", data)
      }
      catch (err) {
        console.error(err)
      }
      setlabel("Thanks for your comment")
      setTimeout(() => {
        setlabel('')
        setname('')
        setemail('')
        setcomment('')
      }, 3000);
    }
  }

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'name': setname(event.target.value)

        break;
      case 'email': setemail(event.target.value)

        break;
      case 'comment': setcomment(event.target.value)

        break;

      default:
        break;
    }
  }
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form className={styles.basicForm} onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          {/* <label htmlFor="name" className={styles.formlabel}>Enter your Name</label> */}
          <input placeholder='Enter your name here' type="text" value={name} onChange={handleChange} className={styles.input} id="name" name='name' aria-describedby="emailHelp" required />
        </div>

        <div className={styles.mb3}>
          {/* <label htmlFor="email" className={styles.formlabel}>Enter your email address</label> */}
          <input type="email" placeholder='Enter your email address here' value={email} onChange={handleChange} className={styles.input} id="email" name='email' aria-describedby="emailHelp" required />
        </div>
        <div className={styles.mb3}>
          {/* <label htmlFor="comment" className={styles.formlabel}>What is in your mind?</label> */}
          <textarea className={styles.input} name='comment' value={comment} onChange={handleChange} placeholder="What is in your mind?" id="comment" required />
        </div>
        <div className={styles.mb3}>
          <label className={styles.formlabel}>{label}</label>
        </div>


        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}

export default Contact