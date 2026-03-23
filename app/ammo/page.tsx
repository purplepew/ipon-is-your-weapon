'use client'
import Nav from '@/components/layout/Nav'
import { usePathname } from 'next/navigation'
import React from 'react'

const Page = () => {
  const path = usePathname()
  const pathname = path.split('/')[1]

  return (
    <div>
      <Nav pathname={pathname} />
    </div>
  )
}

export default Page
