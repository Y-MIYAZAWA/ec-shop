import { axios } from "../../../library/axios";
import { Token } from "../types";

export type LoginRequirement = {
  email: string;
  password: string
}

export const loginWithRequirement = (data: LoginRequirement): Promise<Token> => {
  return axios.post('/auth/signin', data);
}