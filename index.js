let componente = "";
let item;

do {
    item = prompt("Escribe un componente de pc, Escribe listo para terminar");
    if (item != "listo") {
    componente = componente + item + "\n";
    }

} 
while (item != "listo");

console.log("En tu pc tienes estos componentes:");
console.log(componentes);