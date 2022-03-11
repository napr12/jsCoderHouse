function Persona(nombre, saldo) {
  this.nombre = nombre;

  this.saldo = saldo;
}

function restar(importe) {
  if (registro.saldo >= importe) {
      registro.saldo = registro.saldo - importe;
      return ("El saldo actual es de " + registro.saldo);
  } else {
      return ("No posee saldo suficiente para ejecutra la opreción");
  }
}

function sumar(importe) {
  registro.saldo = registro.saldo + importe;
  return ("El saldo actual es de " + registro.saldo);

}
const main = document.getElementById("main");
let importe = document.getElementById("monto");
let nombre = "Nahuel";
const movimientos = new Array();
const registro = new Persona(nombre, importe); 
let alerta= `<div class="alert alert-danger d-flex align-items-center" role="alert">
<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
<div >
  
</div>
</div>`;

let ingreso = document.getElementById("ingreso");
ingreso.onclick = () => {sumar(importe)};

let egreso = document.getElementById("egreso");
egreso.onclick = () => {restar(importe)};

// let eliminar = document.getElementById("eliminar");



if (importe >= 0) {
  main.appendChild(alerta);
  movimientos.push(importe);
} else {
  alert("Debe ingresar un valor mayor a 0");
}

for (let i = 0; i < movimientos.length; i++) {
  console.log("El movimiento " + i + " es de $ " + movimientos[i]);
}

console.log(registro);

// let operacion = parseInt(prompt("Desea realizar alguna operación\n 0)-no\n 1) si"));

// while (operacion === 1) {
//   let tipo = parseInt(prompt("Si desea agregar credito ingrese 0 si desea restar ingrese 1"));

//   if (tipo === 0) {
//       importe = parseInt(prompt("Ingrese el valor de la operación realizada"));

//       console.log(sumar(importe));

//       movimientos.push(importe);
//   } else if (tipo === 1) {
//       importe = parseInt(prompt("Ingrese el valor de la operación realizada"));
//       console.log(restar(importe));

//       movimientos.push(-importe);
//   } else {
//       console.log("No ingreso una opción valida");
//   }

//   operacion = parseInt(prompt("Si desea continuar ingresando operaciones ingrese 1"));
// }

