'use client'

import Image, { StaticImageData } from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { home, exp, quest, noticeBoard, user, active_home, active_exp, active_quest, active_noticeBoard, active_user } from '@/assets/images'
import { contentToPath, pathToContent } from '@/constant';

const imageMap: Record<ContentKey, { default: StaticImageData, active: StaticImageData }> = {
  '홈': { default: home, active: active_home },
  '경험치': { default: exp, active: active_exp },
  '퀘스트': { default: quest, active: active_quest },
  '게시판': { default: noticeBoard, active: active_noticeBoard },
  '사용자': { default: user, active: active_user }
};

const BottomTabItem = ({ content }: { content: ContentKey }) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname.split("/").pop() || "";
  const isActiveTap = pathToContent[currentPath] === content;

  const handleClick = () => {
    router.push(contentToPath[content]);
  };

  return (
    <div className='flex-1 flex flex-col items-center cursor-pointer' onClick={handleClick}>
      <Image
        src={isActiveTap ? imageMap[content].active : imageMap[content].default}
        alt={`${content} 아이콘`}
        width={24}
        height={24}
      />
      <span className={`body-regular-12 ${isActiveTap ? '' : 'text-gray-400'}`}>{content}</span>
    </div>
  )
}

export default BottomTabItem