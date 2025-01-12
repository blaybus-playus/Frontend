'use client'

import { useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'

export const useAuth = () => {
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken', 'refreshToken'])

  const isAuthenticated = !!cookies.accessToken

  const logout = () => {
    removeCookie('accessToken')
    removeCookie('refreshToken')
    router.push('/login')
  }

  return { isAuthenticated, logout }
}
