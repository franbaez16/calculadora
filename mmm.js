function suma(){
    var x,y,sumador,text;
    x = document.getElementById("Num1").value;
    y = document.getElementById("Num2").value;
    sumador = parseFloat(x) + parseFloat(y);
    text = sumador;
    console.log(x)
    document.getElementById("Resultado").innerHTML = text
}

function resta(){
    var restador,text;
    x = document.getElementById("Num1").value;
    y = document.getElementById("Num2").value;
    restador = parseFloat(x) - parseFloat (y);
    text = restador;
    document.getElementById("Resultado").innerHTML = text
}


function division(){
    var divisor
    x = document.getElementById("Num1").value;
    y = document.getElementById("Num2").value;
    divisor = parseFloat(x) / parsefloat(y);
    text = divisor;
    console.log(x)
    document.getElementById("Resultado").innerHTML = text
}

function multiplicacion(){
    var multiplicador
    x = document.getElementById("Num1").value;
    y = document.getElementById("Num2").value;
  multiplicador = parseFloat(x) * parsefloat(y);
    text = multiplicador;
    console.log(x)
    document.getElementById("Resultado").innerHTML = text
}