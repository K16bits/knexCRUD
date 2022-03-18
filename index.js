const express = require('express')
const router = require('./routes')

const port = 3333
const app = express()
app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log(`Server is running\nhttp://localhost:${port}`)
})