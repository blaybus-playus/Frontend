// import QuestHistory from '@/components/quest/QuestHistory'
import QuestHistory2 from '@/components/quest/Special';
import QuestHistory3 from '@/components/quest/Improve';
import QuestHistory4 from '@/components/quest/Personnel';
import QuestHistory5 from '@/components/quest/Individual';
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
