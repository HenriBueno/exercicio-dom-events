function calcular (){
    const valorBase = parseInt(document.getElementById("valor_base").value)
    const valorTransporte = parseInt(document.getElementById("valor_transporte").value)
    const valorAlimentacao = parseInt(document.getElementById("valor_alimentacao").value)

    const receitaTotal = valorBase + valorAlimentacao + valorTransporte
    document.getElementById("valor_receita").setAttribute("value", receitaTotal)

    const valorAutomovel = parseInt(document.getElementById("valor_automovel").value)
    const valorFaltas = parseInt(document.getElementById("faltas").value)

  
    const descontos = valorAutomovel + valorFaltas
    document.getElementById("valor_descontos").setAttribute("value", descontos)

    const total = receitaTotal - descontos 
    document.getElementById("valor_total").setAttribute("value", total)
}


document.getElementById("valor_base").setAttribute("onmouseout","calcular()")
document.getElementById("valor_transporte").setAttribute("onmouseout","calcular()")
document.getElementById("valor_alimentacao").setAttribute("onmouseout","calcular()")
document.getElementById("valor_automovel").setAttribute("onmouseout","calcular()")
document.getElementById("faltas").setAttribute("onmouseout","calcular()")


