import { level_badge_01, level_badge_02, level_badge_03, level_badge_04, level_badge_05 } from "@/assets/images"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { HelpCircle, LucideArrowRight } from "lucide-react"
import Image from "next/image"

export function LevelDialog() {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <HelpCircle className="w-5 h-5 text-primary-300" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>레벨 안내</DialogTitle>
          <DialogDescription className="flex items-center justify-center">
            브론즈 <LucideArrowRight className="mx-[1px] w-3 h-3" />
            실버 <LucideArrowRight className="mx-[1px] w-3 h-3" />
            골드 <LucideArrowRight className="mx-[1px] w-3 h-3" />
            플래티넘 <LucideArrowRight className="mx-[1px] w-3 h-3" />
            다이아몬드
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex items-center">
            <Image
              src={level_badge_01}
              alt={"badge"}
              width={48}
              height={48}
            />
            <div className="body-medium-14">F1 - Ⅰ ~ F1 - Ⅱ</div>
            <div className="ml-auto body-medium-12 text-gray-400">0 ~ 13,500 do</div>
          </div>
          <div className="flex items-center">
            <Image
              src={level_badge_02}
              alt={"badge"}
              width={48}
              height={48}
            />
            <div className="body-medium-14">F2 - Ⅰ ~ F2 - Ⅲ</div>
            <div className="ml-auto body-medium-12 text-gray-400">27,000 ~ 51,000 do</div>
          </div>
          <div className="flex items-center">
            <Image
              src={level_badge_03}
              alt={"badge"}
              width={48}
              height={48}
            />
            <div className="body-medium-14">F3 - Ⅰ ~ F3 - Ⅲ</div>
            <div className="ml-auto body-medium-12 text-gray-400">63,000 ~ 93,000 do</div>
          </div>
          <div className="flex items-center">
            <Image
              src={level_badge_04}
              alt={"badge"}
              width={48}
              height={48}
            />
            <div className="body-medium-14">F4 - Ⅰ ~ F4 - Ⅲ</div>
            <div className="ml-auto body-medium-12 text-gray-400">108,000 ~ 144,000 do</div>
          </div>
          <div className="flex items-center">
            <Image
              src={level_badge_05}
              alt={"badge"}
              width={48}
              height={48}
            />
            <div className="body-medium-14">F5</div>
            <div className="ml-auto body-medium-12 text-gray-400">162,000~</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
