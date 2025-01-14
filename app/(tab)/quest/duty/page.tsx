import QuestHistory from '@/components/quest/QuestHistory';
import React from 'react'

const page = () => {
  const category = ["월특근", "업무개선", "업무1", "업무2"];

  return (
    <div className='space-y-3.5'>
      {category.map((item, index) => (
        <>
          <QuestHistory title={item} index={index} />
        </>
      ))}
    </div>
  )
}

export default page
