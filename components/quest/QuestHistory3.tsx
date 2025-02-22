'use client'

import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
import { quest_badge_zikmu } from '@/assets/images'


const QuestHistory3 = () => {
  const [open, setOpen] = useState(false);

  return (
    <Accordion type="single" collapsible className='bg-white rounded-2xl'>
      <AccordionItem value="item-1">
        <AccordionTrigger onClick={() => setOpen(!open)}>
          <div className='flex items-center gap-3' >
            <Image
              src={quest_badge_zikmu}
              alt='badge'
              width={40}
              height={40}
            />
            <h3 className='title-bold-20'>업무 개선</h3>
          </div>
        </AccordionTrigger>
        <div className='border-b-2 border-gray-300 mb-4'></div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary-300"></div>
            <span className="title-semibold-16">MAX</span>
            {open ?
              <span className="body-regular-14">업무프로세스 개선 리드자</span>
              : <span className="title-semibold-16">1</span>
            }
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#FBD288]"></div>
            <span className="title-semibold-16">MEDIUM</span>
            {open ?
              <span className="body-regular-14">업무프로세스 개선 참여자</span>
              :
              <span className="title-semibold-16">1</span>
            }
          </div>
        </div>
        <div className='w-full h-4'></div>
        <AccordionContent>
          <div className='flex flex-wrap items-center gap-1 h-auto'>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>2월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>7월</div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion >

  )
}

export default QuestHistory3
