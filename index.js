const express = require("express");
const skills = require('./skills')
const info = require('./info')
const pro = require('./projects');
const morgan = require("morgan");
const fetch = require('node-fetch')

const app = express()

app.set('view engine','ejs')
app.set('views','./views')
app.set('port', process.env.PORT || 3000)

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.render('index', {skills,info,pro})
})

app.get('/github', async (req,res) => {
    const response = await fetch('https://api.github.com/users/DorkoSpron0')
    const data = await response.json()

    res.render('github', {data})
})


app.listen(app.get('port'), () => {
    console.log('server started on port 3000')
})
