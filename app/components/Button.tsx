import React from 'react'
import Link from 'next/link'

const Button = () => {
  return (
    <div>
        <Link href='/' className='text-white border border-[#6c757d] rounded-3xl hover:bg-[#495057] hover:border-[#495057] px-5 py-2'>
            Sign Up
        </Link>
    </div>
  )
}

export default Button