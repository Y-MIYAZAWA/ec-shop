import { TabsStartScrollButtonIconSlotPropsOverrides } from "@mui/material";
import { axios } from "../../../library/axios"
import { PaginationType } from "../types/pagination";

type Props = {
  page: number,
  limit: number
}

export const getItems = (props: Props):Promise<PaginationType> => {
  return axios.get(`/items?limit=${props.limit}&page=${props.page}`);
}