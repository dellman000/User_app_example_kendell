const express = require('express');

const app = express();

const path=require('path')
console.log(path.join(__dirname,'./public/index.html'))
const PORT = process.env.PORT ||3000


const api_routes = require('./routes/api_routes')
// create a git route fro evey file in public
app.use(express.static('./public'))
app.use(express.json())
//Allow URL data to be sent through routes
app.use(express.urlencoded({extended:false}))
// allow JSON to be sent through our routes
// load routes
app.use('/', api_routes)

// creates a route for the user to vist the address domains




app.listen(PORT, () => {
    console.log(`the server has started on http://localhost:${PORT}/`)
})