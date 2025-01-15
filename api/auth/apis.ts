// const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function postLogin(userId: userIdProps) {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(userId),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || '로그인 실패');
    }
    const result = await res.json();
    console.log(result)

    return result;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}
