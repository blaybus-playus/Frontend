'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

export default function BackHeader({ title }: { title?: string }) {
  const router = useRouter();

  return (
    <header className={`flex justify-center items-center h-14 px-4 ${title && 'border-b'}`}>
      <button
        onClick={() => router.back()}
        className="absolute left-0 p-4 hover:bg-gray-100 rounded-full"
        aria-label="뒤로 가기"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <h1 className="text-lg font-medium">{title}</h1>
      {
        !title
        && <input
          className="absolute right-4 px-4 py-3 w-[303px] h-12 rounded-lg focus:outline-gray-300 placeholder-gray-400 placeholder:body-medium-16"
          placeholder='검색'
        />
      }
    </header>
  );
}