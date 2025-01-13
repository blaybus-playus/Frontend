import React from 'react'
import QuestView from './QuestView'

const TeamQuest = () => {
  return (
    <div className='bg-gray-50 p-4 rounded-2xl space-y-4'>
      <h2 className='title-semibold-16'>우리 팀 퀘스트</h2>
      <div className='space-y-3.5'>
        <QuestView />
        <QuestView />
      </div>
    </div>
  )
}

export default TeamQuest
