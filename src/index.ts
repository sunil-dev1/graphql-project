
import express from "express"
import { graphqlHTTP } from "express-graphql"
import * as dotenv from "dotenv";
dotenv.config();

import "reflect-metadata"
import { buildSchema } from "type-graphql"


import { UsersResolver } from "../users/users.resolvers"

async function main() {
    const schema = await buildSchema({
        resolvers: [UsersResolver],
        emitSchemaFile: true,
    })

    const app = express()

    app.use(
        "/graphql",
        graphqlHTTP({
            schema: schema,
            graphiql: true,
        })
    )

    const PORT  = process.env.PORT 
    app.listen(PORT)

    console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`)
}

main()