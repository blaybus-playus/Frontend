// ContentLayout.tsx

import React, { ReactNode } from 'react'

interface ContentLayoutProps {
  children: ReactNode
  title: string
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children, title }) => {
  return (
    <div className='w-full p-4 rounded-2xl bg-gray-50'>
      <h2 className="title-semibold-16 mb-6">{title}</h2>
      {children}
    </div>
  )
}

export default ContentLayout
