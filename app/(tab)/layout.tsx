import BottomTab from '@/components/common/BottomTab/BottomTab'
import Header from '@/components/common/Header'
import React from 'react'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="relative bg-primary-100 pt-[104px]">
        <Header />
        <div className="w-auto mx-4 bg-white">
          {children}
        </div>
        <BottomTab />
      </div>
    </div>
  )
}