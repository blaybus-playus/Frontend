import { Skeleton } from "@/components/ui/skeleton";

export default function Page() {
  return (
    <>
      <Skeleton className="w-full h-56 mb-5"></Skeleton>
      <div className="px-4 space-y-4">
        <Skeleton className="w-full h-[200px] rounded-2xl"></Skeleton>
        <Skeleton className="w-full h-[125px] rounded-2xl"></Skeleton>
        <Skeleton className="w-full h-[280px] rounded-2xl"></Skeleton>
      </div>
      <Skeleton className="w-full h-[85px]"></Skeleton>
    </>
  )
}