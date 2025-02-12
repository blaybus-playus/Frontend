import { Button } from '@/components/ui/button'
import React from 'react'

interface CategoryButtonProps {
  tab: string
  variant: 'choice' | 'nonchoice'
  onClick: () => void
}

const CategoryButton = ({ tab, variant, onClick }: CategoryButtonProps) => {
  return (
    <Button
      variant={variant}
      size={'sm'}
      onClick={onClick
      }
    >
      {tab}
    </Button>
  )
}

export default CategoryButton
