const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

const usernames = [
    {name:'Maria', lastName: "Gomez", edad: 22},
    {name:'Araceli', lastName: "Valdez", edad: 28},
    {name:'Jocelyn', lastName: "Flores", edad: 30},
]

app.get('/username/:id', (req, res) => {
    res.send({
        username: usernames[req.params.id]
    })
})
app.get('/usernames', (req, res) => {
    res.send({
        usernames: usernames
    })
})


// app.post('/usernames', (req, res) => {
//     const newUsers =req.body;
//     newUsers.push(newUsers);
//     res.status(201).send("usuario creado");
// })


app.listen(3000);