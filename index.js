import express from 'express'
import DataBank from "./DataBank.js"
import Terminager from "./Terminager.js"

const app = express()

app.use(express.static('public'))

const con = new DataBank("localhost","root","","node")
const terminator = new Terminager()

app.listen(3333,()=>{
    // console.log('http://localhost:3333/')
})

const anus = await con.execute("select * from usuario")

function test(){
    console.clear()
    r1.close()
}