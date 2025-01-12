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
      <div className="relative bg-gray-200 pt-[56px]">
        <Header />
        <TopTab />
        <div className="w-auto mx-4 bg-gray-200">
          {children}
        </div>
        <BottomTab />
      </div>
    </div>
  )
}