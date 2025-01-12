import BottomTab from '@/components/common/BottomTab/BottomTab'
import Header from '@/components/common/Header'
import TopTab from '@/components/common/TopTab/TopTab';
import React from 'react'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="relative bg-primary-100 pt-[56px]">
        <Header />
        <TopTab />
        <div className="w-auto mx-4 bg-white">
          {children}
        </div>
        <BottomTab />
      </div>
    </div>
  )
}