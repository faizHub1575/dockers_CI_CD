import express from "express"
import { PrismaClient } from "@prisma/client"
const app = express()
const prismaClient =new PrismaClient();

app.get("/",(req, res) =>{

    res.json ({
        "message":"get endpoint"
    })
})

app.post("/",(req, res) =>{

    res.json ({
        "message":"postendpoint"
    })
})

app.listen(3000);