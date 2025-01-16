'use client'

import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
import { quest_badge_leader } from '@/assets/images'


const QuestHistory5 = () => {
  const [open, setOpen] = useState(false);

  return (
    <Accordion type="single" collapsible className='bg-white rounded-2xl'>
      <AccordionItem value="item-1">
        <AccordionTrigger onClick={() => setOpen(!open)}>
          <div className='flex items-center gap-3' >
            <Image
              src={quest_badge_leader}
              alt='badge'
              width={40}
              height={40}
            />
            <h3 className='title-bold-20'>개인 부여</h3>
          </div>
        </AccordionTrigger>
        <div className='border-b-2 border-gray-300 mb-4'></div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary-300"></div>
            <span className="title-semibold-16">MAX</span>
            {open ?
              <span className="body-regular-14">신속한 수행</span>
              : <span className="title-semibold-16">3</span>
            }
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#FBD288]"></div>
            <span className="title-semibold-16">MEDIUM</span>
            {open ?
              <span className="body-regular-14">기한 내 수행</span>
              :
              <span className="title-semibold-16">4</span>
            }
          </div>
        </div>
        <div className='w-full h-4'></div>
        <AccordionContent>
          <div className='flex flex-wrap items-center gap-1 h-auto'>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>1월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>4월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>5월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>8월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>9월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>10월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>11월</div>
          </div>

        </AccordionContent>
      </AccordionItem>
    </Accordion >

  )
}

export default QuestHistory5
