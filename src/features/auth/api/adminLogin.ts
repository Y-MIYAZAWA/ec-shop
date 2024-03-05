import { axios } from "../../../library/axios";
import { Token } from "../types";

export type LoginRequirement = {
  email: string;
  password: string
}

export const adminLoginWithRequirement = (data: LoginRequirement): Promise<Token> => {
  return axios.post('/auth/admin/signin', data);
}