import { atom } from "recoil";

export const loadingState = atom({
  key: 'isLoading',
  default: false
})