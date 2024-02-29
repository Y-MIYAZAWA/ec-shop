export type User = {
  id: number,
  email: string,
  emailReissueToken: string,
  isAdmin: boolean,
  createdAt: string,
  updatedAt: string,
  createdBy: number,
  updatedBy: number,
}

export type Token = {
  token: string
}