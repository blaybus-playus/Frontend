import { Progress } from '@/components/ui/progress'
import { EXP_DASH_BOARD_TYPE } from '@/constant'
import React from 'react'
import { LevelDialog } from './LevelDialog'

interface ExpDashBoardProps {
  type: 'current' | 'since'
  firstExp: number
  secondExp: number
}

const ExpDashBoard = ({ type, firstExp, secondExp }: ExpDashBoardProps) => {
  const dashboard = EXP_DASH_BOARD_TYPE[type];

  return (
    <div className="bg-white rounded-2xl p-6 w-full">
      <div className="space-y-10">
        <h2 className="title-semibold-16">
          {dashboard.title}
        </h2>
        <div>
          <div className="space-y-1.5 mb-6">
            <div className="text-center body-medium-16 text-gray-800">
              {dashboard.subtitle}
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-primary-400 headline-bold-24">F1 - I</span>
              {/* <HelpCircle className="w-5 h-5 text-primary-300" /> */}
              <LevelDialog />
            </div>
          </div>

          <Progress value={85} />
          <div className="text-right text-primary-400 body-regular-14 mt-1.5">
            85%
          </div>
        </div>

        {/* Experience Stats */}
        <div className="space-y-4 pt-4">
          <div className="flex justify-between items-center">
            <span className="body-regular-14 text-gray-950">{dashboard.total}</span>
            <span className="body-semibold-14 text-gray-950">{firstExp} do</span>
          </div>
          <div className="flex justify-between items-center border-t pt-4">
            <span className="body-regular-14 text-gray-950">{dashboard.other}</span>
            <span className="body-semibold-14 text-gray-950">{secondExp} do</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpDashBoard
