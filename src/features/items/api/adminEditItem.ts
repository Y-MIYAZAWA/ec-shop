import { axios } from "../../../library/axios"
import { Item } from "../types/item";
import { PostItem } from "../types/postItem";


export const adminEditItem = (path: string, item: PostItem): Promise<Item> => {
  return axios.put(`${path}`,item);
}