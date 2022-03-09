const express = require('express')

const app = express()

app.use(express.json())

let users = [
    { name: "Rihab", email: "rihab@gmail", id: 1 },
    { name: "Mayssa", email: "mayssa@gmail", id: 2 },
    { name: "Slim", email: "slim@gmail", id: 3 }
]


app.get('/', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    let id = +req.params.id
    let user = users.find(el => el.id === id)
    res.send(user)
})

app.post('/users', (req, res) => {
    let newUser = { ...req.body, id: Math.random() }
    users.push(newUser)
    // res.send(users)
    res.status(201).json({ msg: "User added with successfly", users })
})

app.delete('/users/:id', (req, res) => {
    let id = Number(req.params.id)
    users = users.filter(el => el.id !== id)
    res.status(201).json({ msg: "User deleted with successfly", users })
})

app.put('/users/:id', (req, res) => {
    let id = Number(req.params.id)
    users = users.map(el => el.id === id ? { ...el, ...req.body } : el)
    res.status(201).json({ msg: "User updated with successfly", users })
})


const port = process.env.PORT || 7000
app.listen(port, err => {
    err ? console.log(err) : console.log(`The server is running on ${port}`)
})