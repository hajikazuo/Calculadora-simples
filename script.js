function Calcular(op){
    
    var valor1 = document.getElementById("valor1");
    var valor2 = document.getElementById("valor2");
    var total = document.getElementById("total");
    var op, resultado;

    if(op == "-"){
        resultado = Number(valor1.value) - Number(valor2.value);
        total.innerHTML = resultado;
    }
    else if(op == "+"){
        resultado = Number(valor1.value) +  Number(valor2.value);
        total.innerHTML = resultado;
    }
    else if(op == "/"){
        resultado = Number(valor1.value) /  Number(valor2.value);
        total.innerHTML = resultado;
    }
    else if(op == "*"){
        resultado = Number(valor1.value) *  Number(valor2.value);
        total.innerHTML = resultado;
    }
    
}


