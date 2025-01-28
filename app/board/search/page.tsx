import BackHeader from "@/components/common/BackHeader";

export default function Page() {

  return (
    <div className="bg-[#F6F7F9]">
      <BackHeader />
      <div className="min-h-screen mx-4 py-5 flex flex-col gap-3.5">
        <h2 className="body-medium-14">총 32개</h2>

        <div
          // key={post.id}
          className='space-y-3.5 bg-white rounded-2xl px-4 py-5'
        // onClick={() => router.push(`/board/${post.id}`)}
        >
          <div className='flex items-center gap-1.5'>
            <h3 className='text-gray-800 body-semibold-12'>
              현장부서
            </h3>
            <span className='body-regular-12 text-gray-500'>• 00분 전</span>
          </div>
          {/* <div>{post.title}</div> */}
          <div>
            AAA 프로젝트 신설 (경험치 500 do, 신청 마감 ~10/31), 잡초이스 공고(신청 마감 ~11/20)
          </div>
        </div>

        <div
          // key={post.id}
          className='space-y-3.5 bg-white rounded-2xl px-4 py-5'
        // onClick={() => router.push(`/board/${post.id}`)}
        >
          <div className='flex items-center gap-1.5'>
            <h3 className='text-gray-800 body-semibold-12'>
              현장부서
            </h3>
            <span className='body-regular-12 text-gray-500'>• 00분 전</span>
          </div>
          {/* <div>{post.title}</div> */}
          <div>
            AAA 프로젝트 신설 (경험치 500 do, 신청 마감 ~10/31), 잡초이스 공고(신청 마감 ~11/20)
          </div>
        </div>

      </div>
    </div>
  )
}