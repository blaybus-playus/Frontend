import BackHeader from '@/components/common/BackHeader'
import React from 'react'

interface BoardDetailPageProps {
  params: {
    id: string
  }
}

export default async function BoardDetailPage({ params }: BoardDetailPageProps) {
  const { id } = params
  console.log(id)

  return (
    <div className='flex flex-col min-h-screen bg-[#F6F7F9]'>
      <BackHeader title='게시판' />
      <div className="flex-1 mb-[85px] w-auto mx-4 py-5">
        <div className='space-y-4 py-5 border-b'>
          <h1 className='title-semibold-18'>프로젝트111프로젝트11프로젝트프로젝트111프로젝트1111111프로젝트111프로젝트111</h1>
          <div className='text-gray-800 flex items-center body-semibold-14'>현장부서
            <span className='ml-1 caption-regular-11'>• 2024-01-01</span>
          </div>
        </div>
        <div className='pt-5 body-medium-16'>
          AAA 프로젝트 신설 관련 공지사항 입니다. 경험치 500 do 씩 할당 됩니다. (신청 마감 ~10/31) 잡초이스 공고 참고 부탁드립니다. (신청 마감 ~11/20)
        </div>
      </div>
    </div>
  )
}
