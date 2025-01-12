import UserInfoCard from '@/components/common/UserInfoCard'
import ExpDashBoard from '@/components/exp/info/ExpDashBoard'
import TotalExpCard from '@/components/exp/info/TotalExpCard'
import React from 'react'

const page = () => {
  return (
    <div className='space-y-3.5'>
      <UserInfoCard bar={false} />
      <TotalExpCard />
      <ExpDashBoard type={"current"} />
      <ExpDashBoard type={"since"} />
    </div>
  )
}

export default page
