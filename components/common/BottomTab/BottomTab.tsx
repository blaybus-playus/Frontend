import React from 'react'
import BottomTabItem from './BottomTabItem'

const BottomTab = () => {
  return (
    <footer className='w-full h-[85px] fixed bottom-0 z-100 bg-white'>
      <div className='h-[53px] border-t'>
        <div className='my-[6px] flex'>
          <BottomTabItem content={"홈"} />
          <BottomTabItem content={"경험치"} />
          <BottomTabItem content={"퀘스트"} />
          <BottomTabItem content={"게시판"} />
          <BottomTabItem content={"사용자"} />
        </div>
      </div>
    </footer>
  )
}

export default BottomTab