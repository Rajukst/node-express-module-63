const express = require ('express')
const app= express();
const cors= require('cors')
const port = 5000;

app.use(cors())
app.use(express.json())
app.get('/', (req, res)=>{
    res.send('hellow, i am learning node with express')

})

const MyUsers= [
    {id:00, name: 'rahim khan', age: 32, profession: 'job holder', salary: 32000},
    
    {id:01, name: 'karim khan', age: 33, profession: 'Politician', salary: 33000},
    {id:02, name: 'kamrana islam', age: 33, profession: 'Business Man', salary: 36000},
    {id:03,name: 'rahima begum', age: 22, profession: 'singer', salary: 3000},
    {id:04, name: 'kolimon banu', age: 32, profession: 'job holder', salary: 39000},

]
app.get('/users', (req, res)=>{
    const search=req.query.search
    if(search){
        const searchResult= MyUsers.filter(user=>user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else{
        res.send(MyUsers)
    }
    
})

app.get('/users/:id', (req, res)=>{
    const index= req.params.id;
    const user= MyUsers[index]
    res.send(user)
})

app.get('/fruits/mangoes/fazli', (req, res)=>{
    res.send('yammi fazli')
})

app.post('/users', (req, res)=>{
    const newUser= req.body
    newUser.id= MyUsers.length;
    MyUsers.push(newUser)
    console.log('hitting post method', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})



app.listen(port, ()=>{
    console.log('listening from', port)
})