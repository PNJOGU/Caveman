import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <header>
      <nav>
        <ul className='navbar'>
          <li className='caveman'>
            Caveman
          </li>
          <li>
            <Link href={'/'}>Course</Link>
          </li>
          <li>
            <Link href={'/Psychology'}>Psychology</Link>
          </li>
          <li>
            <Link href={'/Videos'}>Youtube</Link>
          </li>
          <li>
            <Link href={'/Livetrading'}>Live trading</Link>
          </li>
          <li>
            <Link href={'/Contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar