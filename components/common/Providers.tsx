'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CookiesProvider } from 'react-cookie';

interface ProvidersProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export default function Providers({ children }: ProvidersProps) {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </CookiesProvider>
  );
}
