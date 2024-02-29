import { axios } from "../../../library/axios";
import { User } from "../../auth/types";


export const getUser = (): Promise<User> => {
  return axios.get('/my/user');
}