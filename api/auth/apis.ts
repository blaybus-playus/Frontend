const BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

export async function getLogin(userId: userIdProps) {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userId),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || '로그인 실패');
    }

    return await res.json();
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}
