const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.get("/", ()=>{


})
async function start(){
try{
    app.listen(process.env.PORT || 4000, ()=>{
        console.log('Server is running...')
    })
}catch(e){
    console.log(e)
}
   
}

start()