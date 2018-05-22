import React from "react"
import { render } from "react-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { ApolloLink } from "apollo-link"
import { withClientState } from "apollo-link-state" // 
import { createPersistedQueryLink } from "apollo-link-persisted-queries" // 
import { createHttpLink } from "apollo-link-http" // 
import { InMemoryCache } from "apollo-cache-inmemory"

import App from "components/App"
import registerServiceWorker from "registerServiceWorker"
import { defaults, resolvers } from "resolvers"

const typeDefs = `
type Block {
  previous: String,
  timestamp: String,
  transaction_mroot: String,
  action_mroot: String,
  block_mroot: String,
  producer: String,
  schedule_version: Int,
  producer_signature: String,
  id: String,
  block_num: Int,
  ref_block_prefix: Int
}
type Query {
  blocks: Block
  block: Block
}
`

// 
ApolloLink.from([
  createPersistedQueryLink({ useGETForHashedQueries: true }),
  createHttpLink({ uri: "/graphql" })
]);

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
    link: withClientState({ resolvers, defaults, typeDefs }) // 
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
, document.getElementById('root'))

registerServiceWorker()
