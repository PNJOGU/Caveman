import React from 'react'
import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa6';
function Footer() {
  return (
    <footer>
      <section>
        <h3>Contact me</h3>
        <p>Address:Westlands,Nairobi</p>
        <p>Email:<Link href={'mailto:paulnjogu2006@gmail.com'}>paulnjogu2006@gmail.com</Link></p>
        <p>Tel:<Link href={'tel:0724767731'}>0724767731</Link></p>
        <p>Tel2:<Link href={'tel:0785667326'}>0785667326</Link></p>
        <div>
          <p>Monday-Friday 08.00a.m-6p.m</p>
          <p>Saturdays- 09.00a.m-3p.m</p>
        </div>
      </section>
      <section >
        <h3>Quick links</h3>
        <ul className='flex flex-col gap-1'>
          <li><Link href={'/'}>Course</Link></li>
          <li><Link href={'/Psychology'}>Psychology</Link></li>
          <li><Link href={'/Youtube'}>Youtube</Link></li>
          <li><Link href={'/Livetrading'}>Live trading</Link></li>
          <li><Link href={'/Contact'}>Contact</Link></li>
        </ul>
      </section>
      <section>
        <h3>Follow me</h3>
        <ul className='flex gap-3 items-center justify-start m-1'>
          <li><Link href="https://www.facebook.com/paul.njogu.16940?mibextid=rS40aB7S9Ucbxw6v" title="facebook" ><FaFacebook /></Link></li>
          <li><Link href="https://chat.whatsapp.com/CfmWzK5KLe8Luf2flacXiV" title="whatsapp" ><FaWhatsapp /></Link></li>
          <li><Link href="https://www.linkedin.com/in/paul-njogu-431580275" title="linkedin" ><FaLinkedin /></Link></li>
          <li><Link href="https://www.instagram.com/paulnjogu_14/" title="Instagram"><FaInstagram /></Link></li>
          <li></li>
        </ul>
      </section>
      <section >
        <p className='flex items-center gap-1'><FaCopyright /> 2024 Caveman - All rights reserved</p>
      </section>
    </footer>
  )
}

export default Footer