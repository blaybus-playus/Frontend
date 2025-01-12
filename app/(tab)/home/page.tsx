import Banner from '@/components/common/Banner'
import RecentBoard from '@/components/home/RecentBoard'
import RecentEXP from '@/components/home/RecentExp'
import TeamSchedule from '@/components/home/TeamSchedule'
import UserInfoCard from '@/components/home/UserInfoCard'
import React from 'react'

const page = () => {
  return (
    <div className='space-y-3.5'>
      <UserInfoCard />
      <RecentEXP />
      <TeamSchedule />
      <Banner />
      <RecentBoard />
    </div>
  )
}

export default page
