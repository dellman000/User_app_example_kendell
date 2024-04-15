const express = require('express');
const app = express();
PORT = 3333


const data = [
    {
        id: 1,
        name: 'Kendell'
    },
    {
        id: 2,
        name: 'JD'
    },
    {
        id: 3,
        name: 'Jim'
    },
    {
        id: 4,
        name: 'BOB'
    }
]


// creates a route for the user to vist the address domains
app.get('/', function (request, response) {
    response.send("Hello User. Im the server")
})

app.get('/api/:user_id', function (request, response) {
    
    const id=request.params.user_id;
    const obj=data.find((element)=>{ 
    if(element.id == id){
        return true
    }})
    if(obj){
        response.json(obj)
    }
    // response.send("User not found")
})



app.get('/data', function (request, response) {
    const queryParms = request.query
    console.log(queryParms)
    //create an empty object
    const obj = {
        // name:"Kendell",age:27
    }
    //If they request the name {name:'true'}, then we add the preperty
    if (queryParms.name === 'true') {
        obj.name = 'Kendell Rennie'
    }
    //If they request the name {age:'true'}, then we add the preperty
    if (queryParms.age === 'true') {
        obj.age = '27'
    }
    response.json(obj)
})

app.get('/about', function (request, response) {
    response.send("Hello User. Im the server and this is the about page")
})


app.listen(PORT, () => {
    console.log(`the server has started on http://localhost:${PORT}/`)
})