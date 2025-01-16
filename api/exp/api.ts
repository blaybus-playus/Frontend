export async function getYearlyExp(year: number, token: string): Promise<ExpResponse> {
  try {
    const res = await fetch(`/api/employee/exp?year=${year}`, {
      method: 'GET',
      headers: {
        'Authorization': ` ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || '데이터 조회 실패');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Experience data fetch error:', error);
    throw error;
  }
}