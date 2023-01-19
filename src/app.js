import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from 'cors'

db.on("error", console.log.bind(console, "Erro de conexão com o banco"))
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express();

process.on('uncaughtException', (error, origin) => {
    console.log('----- Uncaught exception -----');
    console.log(error);
    console.log('----- Exception origin -----');
    console.log(origin);
});
process.on('unhandledRejection', (reason, promise) => {
    console.log('----- Unhandled Rejection at -----');
    console.log(promise);
    console.log('----- Reason -----');
    console.log(reason);
});

app.use(express.json())
app.use(cors())
routes(app)

export default app