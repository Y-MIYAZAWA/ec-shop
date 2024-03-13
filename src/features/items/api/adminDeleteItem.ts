import { axios } from "../../../library/axios"
import { Item } from "../types/item";


export const adminDeleteItem = (path: string): Promise<Item> => {
  return axios.delete(`${path}`);
}