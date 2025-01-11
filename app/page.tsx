'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Page() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', formData)
  }

  // 입력 값이 모두 채워졌는지 확인
  const isFormValid = formData.username.trim() !== '' && formData.password.trim() !== ''



  return (
    <div className="mx-4">
      {/* Main Content */}
      <main className="h-[100vh] relative flex flex-col pt-[152px]">
        <h1 className="headline-semibold-24 font-bold mb-[56px]">로그인</h1>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="space-y-3">
            <label className="body-medium-12 text-gray-800">아이디</label>
            <Input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
              className="w-full h-12 bg-gray-100 border-0 rounded-[16px]"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="body-medium-12 text-gray-800">비밀번호</label>
            <Input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className="w-full h-12 bg-gray-100 border-0 rounded-[16px]"
              required
            />
          </div>

          <Button
            type="submit"
            className={`body-medium-16 text-white absolute bottom-11 w-full h-14 mt-8 rounded-[16px] ${isFormValid ? 'bg-primary-400 hover:bg-primary-500' : 'bg-gray-400'}`}
            disabled={!isFormValid}
          >
            로그인하기
          </Button>
        </form>
      </main>

      {/* Home Indicator */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-2">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  )
}
