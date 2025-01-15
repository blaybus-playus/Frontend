'use client'

import UserInfoCard from '@/components/common/UserInfoCard'
import ExpDashBoard from '@/components/exp/info/ExpDashBoard'
import TotalExpCard from '@/components/exp/info/TotalExpCard'
import { Cookies } from 'react-cookie'
import { useQuery } from '@tanstack/react-query'
import { getExpInfo } from '@/api/home/api'
import React from 'react'

const Page = () => {
  const cookies = new Cookies()
  const accessToken = cookies.get('accessToken')
  const { data } = useQuery({
    queryKey: ['expInfo'],
    queryFn: () => getExpInfo(accessToken)
  })


  const thisYearExp = data?.result?.thisYearExp;
  const limitExp = data?.result?.limitExp;
  const totalExp = data?.result?.totalExp;
  const nextLevelExp = data?.result?.nextLevelExp;
  const allExp = thisYearExp + totalExp;

  const LEVELS = [13500, 27000, 63000, 108000, 162000];

  const remainExp = LEVELS.find(level => level > allExp)
    ? LEVELS.find(level => level > allExp)! - allExp
    : 0;

  const recentPercentage = Number(((remainExp / allExp) * 100).toFixed(1))

  return (
    <div className='space-y-3.5'>
      <UserInfoCard bar={false} />
      <TotalExpCard allExp={allExp} remainExp={remainExp} />
      <ExpDashBoard type={"current"} firstExp={thisYearExp} secondExp={limitExp} recentPercentage={recentPercentage} />
      <ExpDashBoard type={"since"} firstExp={totalExp} secondExp={nextLevelExp} recentPercentage={recentPercentage} />
    </div>
  )
}

export default Page
