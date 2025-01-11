import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
  redirect('/home')
  return (
    <></>
  )
}

export default page
