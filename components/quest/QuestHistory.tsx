import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image, { StaticImageData } from 'next/image'
import { quest_badge_special, quest_badge_zikmu, quest_badge_jeonsa, quest_badge_leader, quest_badge_insa, quest_badge_random_01, quest_badge_random_02, quest_badge_random_03 } from '@/assets/images'

interface QuestHistoryProps {
  title: string
  index: number
}

const QuestHistory = ({ title, index }: QuestHistoryProps) => {
  const randomBadges = ['special', 'zikmu', 'jeonsa', 'leader', 'insa', 'random_1', 'random2', 'random3'];

  // const randomIndex = Math.floor(Math.random() * randomBadges.length);
  // const badgeKey = randomBadges[randomIndex];

  const badgeImages: { [key: string]: StaticImageData } = {
    special: quest_badge_special,
    zikmu: quest_badge_zikmu,
    jeonsa: quest_badge_jeonsa,
    leader: quest_badge_leader,
    insa: quest_badge_insa,
    random_1: quest_badge_random_01,
    random_2: quest_badge_random_02,
    random_3: quest_badge_random_03,
  }

  // const badgeSrc = title === '월특근' ? badgeImages.special : badgeImages[badgeKey];

  return (
    <Accordion type="single" collapsible className='bg-white rounded-2xl'>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className='flex items-center gap-3'>
            <Image
              src={badgeImages[randomBadges[index]]}
              alt='badge'
              width={40}
              height={40}
            />
            <h3 className='title-bold-20'> {title}</h3>
          </div>
        </AccordionTrigger>
        <div className='border-b-2 border-gray-300 mb-4'></div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary-300"></div>
            <span className="title-semibold-16">MAX</span>
            <span className="body-regular-14">4회 이상</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#FBD288]"></div>
            <span className="title-semibold-16">MIDEUM</span>
            <span className="body-regular-14">2회 이상</span>
          </div>
        </div>
        <div className='w-full h-4'></div>
        <AccordionContent>
          <div className='flex flex-wrap items-center gap-1 h-auto'>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>1월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>1월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>1월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>1월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>1월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>1월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>1월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>1월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>1월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>1월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>1월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>1월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>1월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>1월</div>
          </div>

        </AccordionContent>
      </AccordionItem>
    </Accordion >

  )
}

export default QuestHistory
