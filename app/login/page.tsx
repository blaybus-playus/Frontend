'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { postLogin } from '@/api/auth/apis';
import { useToast } from '@/hooks/use-toast';
import { useAtom } from 'jotai';
import { userInfoAtom } from '@/store/atoms';

export default function Page() {
  const router = useRouter();
  const { toast } = useToast()
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);

  const isFormValid = formData.username.length > 0 && formData.password.length > 0;

  const { mutate } = useMutation({
    mutationFn: (data: userIdProps) => postLogin(data),
    onSuccess: (data) => {
      if (data?.tokenStore) {
        const { accessToken, refreshToken } = data.tokenStore;

        setCookie('accessToken', accessToken);
        setCookie('refreshToken', refreshToken);
        setUserInfo({
          name: data.personalInfo.name,
          employeeId: data.employeeId,
          department: data.personalInfo.department,
          joinDate: data.personalInfo.joinDate,
          joinGroup: data.personalInfo.JoinGroup,
          level: data.personalInfo.level,
        })

        console.log('로그인 성공');
        router.push('/home');
      }
    },
    onError: () => {
      toast({
        title: "로그인에 실패하였습니다.",
        description: `아이디와 비밀번호를 확인하세요.`,
      })
    }
  });

  useEffect(() => {
    if (cookies.accessToken) {
      router.push('/home')
    }
  }, [cookies.accessToken, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <div className="mx-4">
      {/* Main Content */}
      <main className="h-[100vh] relative flex flex-col pt-[152px]">
        <h1 className="headline-semibold-24 font-bold mb-[56px]">로그인</h1>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="space-y-3">
            <label className="body-medium-14 text-gray-800">아이디</label>
            <Input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
              className="w-full h-12 bg-gray-100 border-0 placeholder:body-medium-14 placeholder:text-gray-400"
              placeholder='아이디를 입력하세요.'
              required
            />
          </div>

          <div className="space-y-2">
            <label className="body-medium-14 text-gray-800">비밀번호</label>
            <Input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className="w-full h-12 bg-gray-100 border-0 placeholder:body-medium-14 placeholder:text-gray-400"
              placeholder='비밀번호를 입력하세요.'
              required
            />
          </div>

          <Button
            type="submit"
            className={`body-medium-16 text-white absolute bottom-11 w-full h-14 mt-8 rounded-[16px] ${isFormValid ? 'bg-primary-400 hover:bg-primary-500 text-gray-50' : 'bg-gray-400'}`}
            variant={"default"}
            disabled={!isFormValid}
          >
            로그인하기
          </Button>
        </form>
      </main>
    </div>
  )
}
