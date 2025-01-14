'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

export default function BackHeader({ title }: { title: string }) {
  const router = useRouter();

  return (
    <header className="flex items-center h-14 px-4 border-b">
      <button
        onClick={() => router.back()}
        className="p-2 hover:bg-gray-100 rounded-full"
        aria-label="뒤로 가기"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <h1 className="ml-4 text-lg font-medium">{title}</h1>
    </header>
  );
}