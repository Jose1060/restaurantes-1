require('dotenv').config()


const express = require('express')
const {ApolloServer} = require('apollo-server-express')

const {typeDefs} = require('./typeDefs')
const {resolvers} = require('./resolvers')
const connectDB = require("./db");

const app = express()
connectDB()
app.get("/", (req, res) => res.send("Welcome to my API :v"));
module.exports = app


async function start(){

   const apolloServer = new ApolloServer({

        typeDefs,
        resolvers

    })

    await apolloServer.start()

    apolloServer.applyMiddleware({app})




    app.listen(process.env.PORT,()=>{
        console.log('server on port',process.env.PORT)
    })

}

start()