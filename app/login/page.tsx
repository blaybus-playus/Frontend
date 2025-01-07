'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', formData)
  }

  return (
    <div className="min-h-screen bg-white px-4">
      {/* Main Content */}
      <main className="flex flex-col items-center pt-16">
        <h1 className="text-3xl font-bold mb-16">두손꼭Do전!</h1>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-600">아이디</label>
            <Input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
              className="w-full h-12 bg-gray-100 border-0"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">비밀번호</label>
            <Input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className="w-full h-12 bg-gray-100 border-0"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 mt-8 bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            로그인
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

