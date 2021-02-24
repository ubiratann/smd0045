function onOff(){
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")
    document
        .querySelector("body")
        .classList
        .toggle("hidescroll")    
    document
        .querySelector("#modal")
        .classList
        .toggle("adscroll")

}   

function checkField(event){
    const valuesToCheck = [
        "titulo",
        "imagem",
        "categoria",
        "descricao",
        "link"
    ]

    const isEmpty = valuesToCheck.find(function(value){
        const checkIfString = typeof event.target[value].value === "string"
        const checkIfEmpty = !event.target[value].value.trim()

        if(checkIfEmpty && checkIfString){
            return true
        }
    })

    if(isEmpty){
        event.preventDefault()
        alert("Por favor preencha todos os campos")
    }

    
}
