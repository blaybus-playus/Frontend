import React from 'react'

interface BoardDetailPageProps {
  params: {
    id: string
  }
}

export default async function BoardDetailPage({ params }: BoardDetailPageProps) {
  const { id } = params

  return (
    <div>
      {id}
    </div>
  )

}