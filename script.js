//PRIMER  PUNTO//

let num = parseInt(prompt('Introduce un número: '));

for(let i = 1; i <= num; i++){
  if(i % 5 === 0){
    console.log(i);
  }
}

//SEGUNDO PUNTO//

// Pedimos al usuario que introduzca dos números entre 1 y 50
let num1 = parseInt(prompt("Introduce un número entre 1 y 50"));
let num2 = parseInt(prompt("Introduce otro número entre 1 y 50"));

// Comprobamos que los números introducidos son válidos
if (num1 < 1 || num1 > 50 || num2 < 1 || num2 > 50) {
  console.log("Los números introducidos no son válidos. Por favor, inténtalo de nuevo.");
} else {
  // Mostramos los números del 1 al 50
  for (let i = 1; i <= 50; i++) {
    // Si el número actual es igual a alguno de los números introducidos, mostramos "¡Lotería!"
    if (i === num1 || i === num2) {
      console.log(i + " ¡Lotería!");
    } else {
      console.log(i);
    }
  }
}

// TERCER PUNTO//

let numeros = [];
let input;

do {
  input = prompt("Ingresa un número (0 para terminar)");

  if(!isNaN(parseFloat(input))) {
    numeros.push(parseFloat(input));
  }
} while(input !== "0");
console.log(numeros);

//CUARTO PUNTO//
let resultado = ""; // Inicializamos la variable donde se guardará el resultado

while (true) { // Ciclo infinito
  let entrada = prompt("Ingresa una letra o palabra"); // Pedimos al usuario que ingrese una letra/palabra
  
  if (entrada === "") { // Si no hay entrada, salimos del ciclo
    break;
  } else {
    resultado += entrada; // Si hay entrada, la concatenamos al resultado
  }
}

console.log(resultado); // Mostramos el resultado en la consola

//QUINTO PUNTO//

let dia = "";

do {
  dia = prompt("Introduce un día de la semana");

  switch (dia.toLowerCase()) {
    case "lunes":
      alert("Que tengas un buen inicio de semana.");
      break;
    case "martes":
      alert("Feliz martes.");
      break;
    case "miércoles":
      alert("Mitad de semana, ¡vamos que se puede!");
      break;
    case "jueves":
      alert("¡Ya casi llegamos al fin de semana!");
      break;
    case "viernes":
      alert("¡Es viernes, por fin!");
      break;
    case "sábado":
      alert("A disfrutar del fin de semana.");
      break;
    case "domingo":
      alert("Ve a descansar.");
      break;
    default:
      alert("Día no válido, por favor inténtalo de nuevo.");
  }
} while (dia.toLowerCase() !== "domingo");














