
function Notas() {
    var nota = document.getElementById("nota").value;

    if (nota > 3) {
        document.getElementById("res").innerHTML = "Resultado es: tu pasaste";
    } else {
        document.getElementById("res").innerHTML = "Resultado es: tu no pasaste";
    }
}



var arreglo = [7,1,2,8,6,11]
for (let index = arreglo.length; index >=0; index--) {
    console.log(arreglo[index])
}
arreglo.sort(function(a, b){return a - b});


//''ordenar un arreglo
arreglo.splice(2,0,3,4,5)



//arreglo.shift()
//elimina el primero
//arreglo.pop()
//elimina el ultimo

//arreglo.unshift(3)
//agrega un elemento al principio
//arreglo.splice(1,0,5)
//agrega un valor o elimina en una posicione especifica
//arreglo.push(5)
//agrega un elemento al final
console.log(arreglo)