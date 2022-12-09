import express,{Request,Response} from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'

dotenv.config()

const server = express()

server.set("view engine","mustache")
server.set("views",path.join(__dirname,"views"))
server.engine("mustache",mustache())

//Rotas
server.use(mainRoutes)

server.use((req:Request,res:Response)=>{
    res.status(404).send("Página Não Encontrada")
})

server.use(express.static(path.join(__dirname,'../public'))) //Pasta Pública


server.listen(process.env.PORT)