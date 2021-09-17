let grand1, grand2, grand3, condicao

let form = document.querySelector("form")

grand1 = document.querySelector("#grand1")
grand2 = document.querySelector("#grand2")
grand3 = document.querySelector("#grand3")

form.addEventListener('submit', function(e){
    console.log(grand1.value, grand2.value, grand3.value)
    e.preventDefault()
})

function proporcional(grand1, grand2, grand3, callback){
    let grandValue1 = grand1.value
    let grandValue2 = grand2.value
    let grandValue3 = grand3.value

    let primeiraParte = grandValue1
    let segundaParte = grandValue2 * grandValue3

    callback(primeiraParte, segundaParte)
}

function inproporcional(grand1, grand2, grand3, callback){
    let grandValue1 = grand1.value
    let grandValue2 = grand2.value
    let grandValue3 = grand3.value
    
    let primeiraParte = grandValue2
    let segundaParte = grandValue1 * grandValue3
    
    callback(primeiraParte, segundaParte)
}

function desenrolarDaEquação(parteUm, parteDois){
    let resultado = parteDois / parteUm

    document.querySelector("#valor").value = resultado;
}

form.addEventListener('submit', function(event){ 

    condicao = document.querySelector("select").value

    if (condicao === 'proporcional'){
        proporcional(grand1, grand2, grand3, desenrolarDaEquação)
    } else {
        inproporcional(grand1, grand2, grand3, desenrolarDaEquação)
    }

    event.preventDefault();
})
