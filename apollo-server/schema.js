import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools"
import resolvers from "./resolver"

const typeDefs = `
type Block {
  previous: String!,
  timestamp: String!,
  transaction_mroot: String,
  action_mroot: String,
  block_mroot: String,
  producer: String!,
  schedule_version: Int,
  producer_signature: String!,
  regions: [String],
  input_transactions: [String],
  id: String!,
  block_num: Float!,
  ref_block_prefix: Float
}
type Query {
  block: Block!
  blocks: [Block]! @cacheControl(maxAge: 15)
}
`

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema