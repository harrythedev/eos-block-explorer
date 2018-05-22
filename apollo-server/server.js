import express from "express"
import bp from "body-parser"
import cors from "cors"
import { graphqlExpress, graphiqlExpress } from "apollo-server-express"
import schema from "./schema"

const server = express()
const PORT = 8080

server.use(
  '/graphql',
  cors(), // cors added for local env
  bp.json(),
  graphqlExpress({ schema, cacheControl: true }),
)
server.use('/graphiql', graphiqlExpress({ endpointURL: 'graphql' }))

server.listen(PORT, () => console.log(`listening on ${PORT}`))