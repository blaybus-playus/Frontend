import BottomTab from '@/components/common/BottomTab/BottomTab'
import Header from '@/components/common/Header'
import TopTab from '@/components/common/TopTab';
import React from 'react'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="relative bg-gray-100 mt-[56px] mb-[85px]">
        <Header />
        <TopTab />
        <div className="w-auto mx-4 pt-5 bg-gray-100">
          {children}
        </div>
        <BottomTab />
      </div>
    </div>
  )
}