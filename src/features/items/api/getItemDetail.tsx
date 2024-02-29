import { axios } from "../../../library/axios"
import { Item } from "../types/item";


export const getItemDetail = (path: string): Promise<Item> => {
  return axios.get(`${path}`);
}