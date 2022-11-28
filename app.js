require('dotenv').config()
const express = require('express')
const {ApolloServer} = require('apollo-server-express')

const {typeDefs} = require('./typeDefs')
const {resolvers} = require('./resolvers')
const connectDB = require("./db");
const Restaurntes2 = require('./models/Restaurantes')
var bodyParser = require('body-parser')

const app = express()
connectDB()
app.get("/", (req, res) => res.send("Welcome to my API :v"));

app.get("/descargar",function(req,res){
    res.download(__dirname+'/app-movil/'+'app-release.apk')
});

app.get("/GetAllrestaurants",async (req,res)=>{
    const rest = await Restaurntes2.find()
    res.json(rest);
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post("/restaurantescerca",async (req,res)=>{
    let longitud = req.body.longitud;
    let latitud = req.body.latitud;
    let etiquetas2 = req.body.etiquetas;

    const rest = await Restaurntes2.find({}).select('longitud')
    const x1 = latitud - 0.004
    const x2 = latitud + 0.004

    const y1 = longitud - 0.004
    const y2 = longitud + 0.004


    const rest2 = await Restaurntes2.find({$and: 
    [{
        latitud: {
            $gte:x1,
            $lte:x2
        },
        longitud:{
            $gte:y1,
            $lte:y2
        },
        etiquetas:{
            $in:etiquetas2
        }
        
        
    }]
    })

    console.log("latitud")
    console.log(x1)
    console.log(x2)

    console.log("longitud")
    console.log(y1)
    console.log(y2)
    res.json(rest2);
});


app.get("/VariosRestaurantes",async (req,res)=>{
    let listaRestaurantesid = req.body._id;
    console.log(listaRestaurantesid)
    const rest = await Restaurntes2.find({_id: {$in:listaRestaurantesid}})
    res.json(rest);
});













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