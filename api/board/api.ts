export async function getPosts(token: string) {
  try {
    const res = await fetch('/api/board/read/all', {
      method: 'GET',
      headers: {
        'Authorization': ` ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || '게시물 실패');
    }
    const result = await res.json();
    console.log(result)

    return result;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}
