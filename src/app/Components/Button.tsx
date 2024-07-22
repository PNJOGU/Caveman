import React from 'react'
import Link from 'next/link'
function Button({ name, lname }: { name: string, lname: string }) {
  return (
    <Link href={lname}><button>{`next ${name}`}</button></Link>
  )
}

export default Button