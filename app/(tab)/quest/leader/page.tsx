// import QuestHistory from '@/components/quest/QuestHistory'
import QuestHistory2 from '@/components/quest/QuestHistory2';
import QuestHistory3 from '@/components/quest/QuestHistory3';
import QuestHistory4 from '@/components/quest/QuestHistory4';
import QuestHistory5 from '@/components/quest/QuestHistory5';
import React from 'react'

const page = () => {
  // const category = ["월특근", "업무개선", "업무1", "업무2"];
  return (
    <div className='space-y-3.5'>
      {/* {category.map((item, index) => (
        <>
          <QuestHistory title={item} index={index} />
        </>
      ))} */}
      <QuestHistory2 />
      <QuestHistory3 />
      <QuestHistory4 />
      <QuestHistory5 />
    </div>
  )
}

export default page
