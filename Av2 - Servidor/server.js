const express = require("express")
const server = express()

server.use(express.urlencoded({extended : true}))

server.get('/',function(req,res){
  return res.sendFile(__dirname+"/frontend/index.html")

})


server.post('/',function(req,res){
    let retorno = req.body.numero
    retorno = retorno /1
    return res.send( `${retorno  + 2}`);
})


server.listen(3333,() => {
  console.log(`Example app listening at http://localhost:3333`)
})
