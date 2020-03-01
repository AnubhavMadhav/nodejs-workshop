const express = require('express')
const path = require('path')

const app = require('express')()
const server = require('http').createServer(app)

app.use(express.static(path.join(__dirname, 'static')))

server.listen(8000, (err) => {
    console.log(err ? err: 'Server running on port 8000')
}
)