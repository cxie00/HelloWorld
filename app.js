const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welcome to my home page'))
app.get('/benny', (req, res) => res.send('Benny page'))
app.get('/chloe', (req,res) => res.send('Chloe Page') )


app.listen(port, () => console.log(`Example app listening on port ${port}!`))