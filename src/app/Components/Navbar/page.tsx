'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { RiMenu4Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
function Navbar() {
  const [menu, setMenu] = useState(false);


  const handleMenu = () => {
    setMenu(!menu);
  }

  const handleList = () => {
    setMenu(false);
  }
  return (
    <header>
      <nav>
        <div className='caveman'>
          Caveman
        </div>
        <ul className='navbar' style={{ display: menu ? "flex" : "none" }}>
          <li onClick={handleList}>
            <Link href={'/'}>Course</Link>
          </li>
          <li onClick={handleList}>
            <Link href={'/Psychology'}>Psychology</Link>
          </li>
          <li onClick={handleList}>
            <Link href={'/Videos'}>Youtube</Link>
          </li>
          <li onClick={handleList}>
            <Link href={'/Livetrading'}>Live trading</Link>
          </li>
          <li onClick={handleList}>
            <Link href={'/Contact'}>Contact</Link>
          </li>
        </ul>
        <div className='navbaricons'>
          {menu ? <MdClose className='menuicon' onClick={handleMenu} /> : <RiMenu4Line className='menuicon' onClick={handleMenu} />}
        </div>
      </nav>
    </header>
  )
}

export default Navbar