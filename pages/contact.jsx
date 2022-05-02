import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'


const Contact = () => {

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    //const data = { username: 'example' };

    fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
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
    const data = {name, email, comment};
    try{
      postData("http://localhost:3000/api/postcontact", data)
    }
    catch(err)
    {
      console.log(err)
    }
    setlabel("Thanks for your comment")
    setTimeout(() => {
      setlabel('')
      setname('')
      setemail('')
      setcomment('')
    }, 3000);

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
          <label htmlFor="name" className={styles.formlabel}>Enter your Name</label>
          <input type="text" value={name} onChange={handleChange} className="form-control" id="name" name='name' aria-describedby="emailHelp" />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Enter your email address</label>
          <input type="email" value={email} onChange={handleChange} className="form-control" id="email" name='email' aria-describedby="emailHelp" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="comment" className={styles.formlabel}>What is in your mind?</label>
          <textarea className="form-control" name='comment' value={comment} onChange={handleChange} placeholder="Leave a comment here" id="comment" />
        </div>
        <div  className={styles.mb3}>
          <label className={styles.formlabel}>{label}</label>
        </div>


        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  )
}

export default Contact