export const typeDefs = `
type User {
  id: ID
  name: String
}

type Query {
  me: User
}
`
