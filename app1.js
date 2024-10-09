//inner para que lo muestre en el front//

/*let opId1 = document.getElementById("p1");
opId1.innerHTML = "Javascript";

let opId2 = document.getElementById("p2");
opId2.innerHTML = "kotlin";

let opId3 = document.getElementById("p3");
opId3.innerHTML = "C++";

let elementoClase = document.getElementsByClassName("lista");
console.log(elemento.Clase);
*/

/*let elementoQ = document.querySelector("ul")
console.log(elementoQ.childElementCount);
console.log(elementoQ.children);

console.log(elementoQ.children[1]);
*/


//console.log(firstelementchild);

//console.log(lastelementchild);

let elementosP = document.getElementsByTagName("p");    
console.log(elementosP.length);

for(let i=0; i< elementosP.length; i++){

    console.log(elementosP[1].textContent);
}


elementosP[2].innerHTML ="Prueba"

let opId = document.getElementById("p1");

opId.style.background = "blue";
opId.style.color = "red";
opId.style.borderRadius = "8px";
opId.style.width = "250px";
opId.style.height = "20px";
opId.style.textAlign = "center";
