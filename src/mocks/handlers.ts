import { graphql, GraphQLVariables } from 'msw';

export const handlers = [
  graphql.query('GetUserInfo', (req, res, ctx) => {
    res.
  })
]