
function Notas() {
    var nota = document.getElementById("nota").value;
    console.log(nota)
    if (nota == "") {
        alert("No has escrito ninguna nota")
        document.getElementById("res2").innerHTML = "escribe un numero";
        document.getElementById("res2").style.color = "red";
    }else if (nota > 3) {
        document.getElementById("res2").innerHTML = "tu pasaste";
        document.getElementById("res2").style.color = "rgb(59, 151, 90)";
    } else {
        document.getElementById("res2").innerHTML = "tu no pasaste";
        document.getElementById("res2").style.color = "red";
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