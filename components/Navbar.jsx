import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
        {/*This is the navigation bar component */}
      <nav className={styles.mainnav}>
        <ul>
          <Link href='/'><a><li>Home</li></a></Link>
          <Link href='/about'><a><li>About</li></a></Link>
          <Link href='/contact'><a><li href='/'>Contact</li></a></Link>
          <Link href='/blog'><a><li>Blog</li></a></Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar