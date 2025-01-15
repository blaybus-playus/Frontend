import React from 'react'

const TotalExpCard = ({ allExp }: { allExp: number }) => {
  return (
    <div className='p-4 bg-gray-50 space-y-1.5 rounded-2xl'>
      <div className='flex justify-between items-center'>
        <h2 className='title-semibold-18 text-gray-950'>총 누적 경험치</h2>
        <span className='headline-bold-24 text-primary-400'>{allExp} do</span>
      </div>
      <div className='body-regular-12 text-gray-500 text-right'>
        레벨 업까지 8500 do 남음
      </div>
    </div>
  )
}

export default TotalExpCard
