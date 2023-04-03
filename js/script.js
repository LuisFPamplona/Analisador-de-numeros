var numeros = []

function Adicionar(){
    let resposta = window.document.getElementById('res')
    resposta.innerHTML=''
    let numero = window.document.getElementById('number').value
    
    if(numero > 100 || numero < 1 || numero == '')
    {
        window.alert('Número inválido.')
    }else if(inNumeros(numero) == false){

        numeros.push(numero)
        let box = window.document.getElementById('selecionados')
        let option = document.createElement('option')
        let optionText = document.createTextNode(`Valor ${numero} adicionado.`)
        option.appendChild(optionText)
        
        box.appendChild(option)
        
    }else{
        window.alert('Número já adicionado.')
    }

    window.document.getElementById('number').value = ''
}

function Analisar(){
    let resposta = window.document.getElementById('res')
    resposta.innerHTML=''
    numeros.sort(function (a, b) {  return a - b;  });
    
    resposta.innerHTML += `Foram adicionados ${numeros.length} valores. </br>`
    resposta.innerHTML += `O maior valor adicionado foi ${numeros[numeros.length -1]}</br>`
    resposta.innerHTML += `O menor valor adicionado foi ${numeros[0]}</br>`
    
    let soma = 0;
    
    for(cont = numeros.length -1; cont >= 0 ; cont--)
    {
        soma += Number (numeros[cont])
    }
    resposta.innerHTML += `A soma dos valores acidionados é ${soma}</br>`
    resposta.innerHTML += `A média dos valores é de ${soma/numeros.length}`
}

function inNumeros(n){
    if(numeros.indexOf(n) == -1){
        return false
    }else{
        return true
    }
}

//total de numeros add
//maior valor
//menor valor
//soma dos valores
//media dos valores