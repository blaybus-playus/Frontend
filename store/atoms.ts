import { atom } from 'jotai';

export const currentPathAtom = atom<string[]>(['']);
export const userInfoAtom = atom<userInfo>({
  name: '김민수',
  employeeId: '2023010101',
  department: '음성 1센터',
  joinDate: '2023-01-01',
  level: 'F1-Ⅰ',
});