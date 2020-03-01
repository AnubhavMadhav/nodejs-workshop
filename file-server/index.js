const http = require('http')
const path = require('path')
const fileSystem = require('fs')

const app = http.createServer((request, response) => {
    try{
    console.log(request.url)

    let url = request.url

    if(url === '/'){
        url = '/index.html'
    }
    
    const filePath = path.join(__dirname, 'static', url)
    console.log(filePath)

    const fileStream = fileSystem.createReadStream(filePath)
    fileStream.pipe(response)
    }
    catch(err){
    console.log(err)
}}
)

app.listen(8000,(err)=> {
    if(err){
        console.log(err)
    }
    else{
        console.log('Server running at Port 8000')
    }
})