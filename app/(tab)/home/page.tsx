import Banner from '@/components/common/Banner'
import UserInfoCard from '@/components/common/UserInfoCard'
import RecentBoard from '@/components/home/RecentBoard'
import RecentEXP from '@/components/home/RecentExp'
import TeamQuest from '@/components/home/TeamQuest'
import React from 'react'

const page = () => {
  return (
    <div className='space-y-3.5'>
      <UserInfoCard bar={true} />
      <RecentEXP />
      <TeamQuest />
      <Banner />
      <RecentBoard />
    </div>
  )
}

export default page
