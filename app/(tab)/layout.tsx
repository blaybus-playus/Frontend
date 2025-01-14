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
    <div className="flex flex-col min-h-screen bg-[#F6F7F9]">
      <Header />
      <TopTab />
      <main className="flex-1 mb-[85px] w-auto mx-4 py-5">
        {children}
      </main>
      <BottomTab />
    </div>
  )
}