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
let nombre = prompt("Ingrese su nombre");
let importe = parseInt(prompt("Ingrese el dinero que dispone"));
const registro = new Persona(nombre, importe);

const movimientos = new Array();
if (importe >= 0) {
  movimientos.push(importe);
} else {
  console.log("Debe ingresar un valor mayor a 0");
}
let operacion = parseInt(prompt("Desea realizar alguna operación\n 0)-no\n 1) si"));

while (operacion === 1) {
  let tipo = parseInt(prompt("Si desea agregar credito ingrese 0 si desea restar ingrese 1"));

  if (tipo === 0) {
      importe = parseInt(prompt("Ingrese el valor de la operación realizada"));

      console.log(sumar(importe));

      movimientos.push(importe);
  } else if (tipo === 1) {
      importe = parseInt(prompt("Ingrese el valor de la operación realizada"));
      console.log(restar(importe));

      movimientos.push(-importe);
  } else {
      console.log("No ingreso una opción valida");
  }

  operacion = parseInt(prompt("Si desea continuar ingresando operaciones ingrese 1"));
}

for (let i = 0; i < movimientos.length; i++) {
  console.log("El movimiento " + i + " es de $ " + movimientos[i]);
}

console.log(registro);