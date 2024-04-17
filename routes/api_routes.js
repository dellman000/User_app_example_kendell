// const data = require('../db/data.js')
const router = require('express').Router()
const {v4:generateID} = require('uuid')
const fs =require('fs/promises')
const { readFile } = require('fs')
// const data =  getfile()
const person ={
    name:'JD',
    tool: {
        printName(){
        console.log('JD')    
        }
    }
}

async function getfile(){
    const data = await fs.readFile('./db/users.json','utf-8')
    // console.log(data)
    return JSON.parse( data)
}

router.get('/', function (request, response) {
    response.sendFile(path.join(__dirname,'./public/index.html'))
})
router.get('/users',  async function (request, response) {
     const file= await getfile()
     response.send(file)
})

router.get('/api/:user_id', function (request, response) {
    
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

router.get('/data', function (request, response) {
    // "?"" is the operational operator, it wont move to the right if value is a falsey value 
    const queryParms = request.query.name?.toLowerCase()
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
router.post('/add', async function (request, response) {
    // response.json({message:"Hello User. Im the server and this is the about page"})
    console.log(request.body)
    const id = generateID()
    const data= await getfile()

    console.log(data)
    data.push({
        ...request.body,
        id:id
    })
    
    console.log(data)
      await fs.writeFile("./db/users.json",JSON.stringify(data,null,2))

    response.json({message:"Hello User. Im the server and this is the about page"})
    // response.redirect('/')
})
router.get('/about', function (request, response) {
    response.json({message:"Hello User. Im the server and this is the about page"})
})


module.exports=router