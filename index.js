const express = require('express')

const app = express()

const page = `<html>
    <title>Diégo Teixeira da Costa</title>
    <h1>Why can't a bike ride on its own?</h1>
    <p>Because it's two tired!</p>
    <h2><marquee>!!!!hahahahaha!!!!</marquee><h2>
</html>`

app.get(
    '/',
    (request, response) => response.send(page)
)

const port = process.env.PORT || 3000

app.listen(
    port,
    console.log(`Listening on :${port}`)
)
