export async function getExpInfo(token: string) {
  try {
    const res = await fetch('/api/employee/info/exp', {
      method: 'GET',
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || '(exp-info) 조회 실패');
    }
    const result = await res.json();
    console.log(result)

    return result;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

