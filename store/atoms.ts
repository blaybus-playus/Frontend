import { atom } from 'jotai';
import { man1_avatar } from '@/assets/images'


export const currentPathAtom = atom<string[]>(['']);
export const userInfoAtom = atom<userInfo>({
  name: '김민수',
  employeeId: '2023010201',
  department: '음성 1센터',
  joinDate: '2023-01-01',
  joinGroup: "1",
  level: 'F1-Ⅰ',
});

export const avatar = atom(man1_avatar);