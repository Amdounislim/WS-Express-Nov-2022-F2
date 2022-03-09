// 1 - import express
const express = require('express')

// 2 - init express
const app = express()


//5 - logger middlwear
function logger(req, res, next) {
    // console.log("method : ", req.method)
    // console.log("path : ", req.url)
    // console.log("req : ", req)
    if (10 > 20) {
        next()
    } else {
        res.send('Ouuuuuuuuuuuuuups')
    }
}

app.use(logger)

// 4 - create your endpoint
app.get('/', (req, res) => {
    res.send("Welcom to WS-Express")
})

app.get('/post', (req, res) => {
    res.send("Bonjouuuuuur")
})


// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/public/")
//     res.sendFile(__dirname + "/public/contact.html")
//     res.sendFile(__dirname + "/public/about.html")
// })

// app.use(express.static(__dirname + "/public"))


// 3 - run server
const port = process.env.PORT || 5000
app.listen(port, err => {
    err ? console.log(err) : console.log(`The server is running on ${port}`)
})