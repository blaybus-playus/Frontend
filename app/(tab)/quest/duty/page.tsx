// import QuestHistory from '@/components/quest/QuestHistory';
import QuestHistoryZik from '@/components/quest/QuestHistoryDuty';
import React from 'react'

const page = () => {
  // const category = ["MY 그룹"];

  return (
    <div className='space-y-3.5'>
      {/* {category.map((item, index) => (
        <>
          <QuestHistory title={item} index={index} />
        </>
      ))} */}
      <QuestHistoryZik />
    </div>
  )
}

export default page
