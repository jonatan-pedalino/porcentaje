document.getElementById("h3captured")

var sueldo = Number(prompt("ingresa el sueldo sin puntos barbarita, jajaja "))
var porsentaje = Number(prompt("ingresa el porsentaje"))

function porsentajeSueldo (a,b) {
    var b = (sueldo * porsentaje) / 100 + sueldo

    return b
}

alert("barbarita vas a cobrar " + porsentajeSueldo())
