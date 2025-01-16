'use client'

import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
import { quest_badge_leader, quest_badge_special } from '@/assets/images'


const QuestHistoryZik = () => {
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
            <h3 className='title-bold-20'>직무 퀘스트</h3>
          </div>
        </AccordionTrigger>
        <div className='border-b-2 border-gray-300 mb-4'></div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary-300"></div>
            <span className="title-semibold-16">MAX</span>
            {open ?
              <span className="body-regular-14">80</span>
              : <span className="title-semibold-16">42</span>
            }
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#FBD288]"></div>
            <span className="title-semibold-16">MEDIUM</span>
            {open ?
              <span className="body-regular-14">40</span>
              :
              <span className="title-semibold-16">9</span>
            }
          </div>
        </div>
        <div className='w-full h-4'></div>
        <AccordionContent>
          <div className='flex flex-wrap items-center gap-1 h-auto'>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>1주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>2주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>3주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>4주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>5주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>6주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>7주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>8주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>9주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>10주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>11주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>12주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>13주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>14주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>15주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>16주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>17주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>18주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>19주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>20주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>21주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>22주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>23주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>24주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>25주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>26주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>27주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>28주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>29주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>30주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>31주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>32주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>33주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>34주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>35주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300   flex-shrink-0'>36주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>37주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>38주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>39주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>40주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>41주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>42주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>43주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>44주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>45주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>46주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>47주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>48주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>49주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>50주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>51주</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>52주</div>
          </div>

        </AccordionContent>
      </AccordionItem>
    </Accordion >

  )
}

export default QuestHistoryZik
