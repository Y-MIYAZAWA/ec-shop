import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: 'loginPersistState',
  storage: typeof window === 'undefined' ? undefined : window.localStorage,
})

export const loginState = atom<boolean>({
  key: "islogin",
  default: false,
  effects_UNSTABLE: [persistAtom],
})