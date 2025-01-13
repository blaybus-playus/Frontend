'use client';

import { ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CookiesProvider } from 'react-cookie';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

interface ProvidersProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export default function Providers({ children }: ProvidersProps) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      // router.replace('/login')
    } else {
      router.replace('/home');
    }
  }, [isAuthenticated, router])

  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </CookiesProvider>
  );
}
