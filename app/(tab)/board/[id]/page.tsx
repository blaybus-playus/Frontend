import BackHeader from '@/components/common/BackHeader'
import React from 'react'

interface BoardDetailPageProps {
  params: {
    id: string
  }
}

export default async function BoardDetailPage({ params }: BoardDetailPageProps) {
  const { id } = params

  return (
    <div className='flex flex-col min-h-screen bg-[#F6F7F9]'>
      <BackHeader title='게시판' />
      {id}
    </div>
  )
}
