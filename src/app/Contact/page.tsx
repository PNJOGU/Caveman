import React from 'react'
import Link from 'next/link';
import { GiVibratingSmartphone } from "react-icons/gi";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
function Contact() {
  return (
    <main className='maincontact'>
      <section>
        <h2>Contact me</h2>
        <p>You can contact me at any time and let me know how I can be of help. Use below communication channels and be sure I will respond within 24 hours.</p>
      </section>
      <section className='contactinfo'>
        <div>
          <div><GiVibratingSmartphone className='icons' /></div>
          <p>Phone</p>
          <Link href={'tel:254724767731'}>
            <p>254724767731</p>
          </Link>
        </div>
        <div>
          <div><TfiEmail className='icons' /></div>
          <p>Email</p>
          <Link href={'mailto:paulnjogu2006@gmail.com'}>
            <p>paulnjogu2006@gmail.com</p>
          </Link>
        </div>
        <div>
          <div><CiLocationOn className='icons' /></div>
          <p>Address</p>
          <p>P.O BOX 4460-00100</p>
          <p>Westlands, Nairobi</p>
        </div>
      </section>
    </main>
  )
}

export default Contact