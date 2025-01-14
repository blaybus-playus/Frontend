import { Skeleton } from "@/components/ui/skeleton"

export default function Page() {
  return (
    <>
      <Skeleton className="w-full h-[56px] bg-gray-200 dark:bg-gray-700"></Skeleton>
      <div className="container mx-auto p-4 space-y-4">
        <div className="space-y-4">
          <Skeleton className="w-full h-[200px] rounded-2xl bg-gray-200 dark:bg-gray-700"></Skeleton>
          <Skeleton className="w-full h-[125px] rounded-2xl bg-gray-200 dark:bg-gray-700"></Skeleton>
          <Skeleton className="w-full h-[280px] rounded-2xl bg-gray-200 dark:bg-gray-700"></Skeleton>
        </div>
      </div>
      <Skeleton className="w-full h-[85px] bg-gray-200 dark:bg-gray-700">
        <div className="flex justify-evenly py-2 px-2 gap-4">
          <Skeleton className="w-8 h-8 rounded-xl bg-gray-300 dark:bg-gray-200"></Skeleton>
          <Skeleton className="w-8 h-8 rounded-xl bg-gray-300 dark:bg-gray-200"></Skeleton>
          <Skeleton className="w-8 h-8 rounded-xl bg-gray-300 dark:bg-gray-200"></Skeleton>
          <Skeleton className="w-8 h-8 rounded-xl bg-gray-300 dark:bg-gray-200"></Skeleton>
          <Skeleton className="w-8 h-8 rounded-xl bg-gray-300 dark:bg-gray-200"></Skeleton>
        </div>
      </Skeleton>
    </>
  )
}