type Post = {
  id: string
  title: string
  content: string
  jobGroup: string | null
  success: boolean
  message: string | null
}

// API 응답 타입 정의
type getPostsResponse = {
  message: string | null
  statusCode: null
  result: Post[]
}