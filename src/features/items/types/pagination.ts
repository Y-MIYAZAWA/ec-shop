import { Item } from "./item"

type PaginationType = {
  currentPage: number,
  data: Array<Item>,
  from: number,
  lastPage: number,
  lastPageUrl: string,
  nextPageUrl: string,
  path: string,
  perPage: number,
  prevPageUrl: string,
  to: number,
  total: number,
}

export type{ PaginationType }