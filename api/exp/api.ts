// export async function getYearlyExp(year: number, token: string): Promise<ExpResponse> {
//   try {
//     const res = await fetch(`/api/employee/exp?year=${year}`, {
//       method: 'GET',
//       headers: {
//         'Authorization': ` ${token}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!res.ok) {
//       const errorData = await res.json();
//       throw new Error(errorData.message || '데이터 조회 실패');
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error('Experience data fetch error:', error);
//     throw error;
//   }
// }

export async function getExpHistory(token: string) {
  if (!token) {
    throw new Error('인증 토큰이 필요합니다.');
  }

  try {
    const res = await fetch('/api/employee/history', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    // 응답 상태 로깅
    console.log("Response status:", res.status);
    console.log("Response headers:", Object.fromEntries(res.headers.entries()));

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || `API 오류: ${res.status}`);
    }

    const text = await res.text(); // 먼저 텍스트로 받아서 확인
    console.log("Raw response:", text);

    let result;
    try {
      result = JSON.parse(text);
    } catch (e) {
      console.error("JSON 파싱 오류:", e);
      throw new Error('응답을 파싱할 수 없습니다.');
    }

    if (!result) {
      throw new Error('데이터가 비어있습니다.');
    }

    return result;
  } catch (error) {
    console.error('Experience data fetch error:', error);
    throw error;
  }
}