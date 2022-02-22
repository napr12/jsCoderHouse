function Persona(nombre, saldo) {
  this.nombre = nombre,
  this.saldo = saldo
}
function restar() {
  let importe = parseInt(prompt("Ingrese el valor de la operación realizada"));
  registro.saldo = registro.saldo - parseInt(importe);
}
function sumar() {
  let importe = parseInt(prompt("Ingrese el valor de la operación realizada"));
  registro.saldo = registro.saldo+ parseInt(importe);
}

const registro = new Persona(prompt("Ingrese su nombre"), parseInt(prompt("Ingrese el dinero que dispone")));

let operacion = parseInt(
  prompt("Desea realizar alguna operación\n 0)-no\n 1) si")
);
while (operacion === 1) {
  let tipo = parseInt(
    prompt("Si desea agregar credito ingrese 0 si desea restar ingrese 1")
  );
  if (tipo === 0) {
    sumar();
  } else {
    restar();
  }
  alert(registro.saldo);
  operacion = parseInt(
    prompt("Si desea continuar ingresando operaciones ingrese 1")
  );
}
