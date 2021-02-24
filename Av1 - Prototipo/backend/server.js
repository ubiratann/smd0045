const express = require("express");
const server = express();
const PORT = 3333;

let ideias= [
    {
        imagem:"https://image.flaticon.com/icons/svg/2729/2729007.svg",
        titulo:"Cursos de Programação",
        categoria:"Estudo",
        descricao:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla, quis est repellat illo sequi at molestias",
    },
    {
        imagem:"https://image.flaticon.com/icons/svg/2729/2729005.svg",
        titulo:"Exercícos Físicos",
        categoria:"Saúde",
        descricao:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla, quis est repellat illo sequi at molestias",
    },
    {
        imagem:"https://image.flaticon.com/icons/svg/2729/2729027.svg",
        titulo:"Meditação",
        categoria:"Mentalidade",
        descricao:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla, quis est repellat illo sequi at molestias",
    }
]

//configurar arquivos estaticos
server.use(express.static("frontend/public"))

//habilitar uso de req.body
server.use(express.urlencoded({extended : true}))

const nunjucks = require('nunjucks')
nunjucks.configure("frontend/views",{
    express: server,
    noCache: true,

})


//rota pagina principal
server.get('/',function(req,res){
    return res.render("index.html",{ ideias: ideias })
})

//rota pagina 
server.get('/ideias',function(req,res){
    return res.render("ideias.html", {ideias:ideias})
})


server.post("/",function(req,res){

    const ideia = {
        imagem: req.body.imagem,
        titulo: req.body.titulo,
        categoria: req.body.categoria,
        descricao: req.body.descricao,
        // link: req.body.link,
        
    }

    ideias.push(ideia);
    return res.redirect("/ideias");

})

server.listen(PORT,()=>{
    console.log(`Servidor iniciado na porta ${PORT}` )
})
