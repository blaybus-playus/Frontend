export const PATH_TO_CONTENT: Record<string, ContentKey> = {
  'home': '홈',
  'exp': '경험치',
  'quest': '퀘스트',
  'board': '게시판',
  'mypage': '사용자'
};

export const CONTENT_TO_PATH: Record<ContentKey, string> = {
  '홈': '/home',
  '경험치': '/exp/info',
  '퀘스트': '/quest/duty',
  '게시판': '/board',
  '사용자': '/mypage'
};

export const TAB_MENU_ITEMS: ContentKey[] = ['홈', '경험치', '퀘스트', '게시판', '사용자'] 