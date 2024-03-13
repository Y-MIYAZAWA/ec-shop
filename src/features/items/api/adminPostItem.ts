import { axios } from "../../../library/axios";
import { PostItem } from "../types/postItem";

export const adminPostItem = (props: PostItem) => {
  return axios.post('/items',props);
}