function Persona(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}
function restar(importe) {
  return(registro.saldo = registro.saldo - importe);
}
function sumar(importe) {

  return(registro.saldo = registro.saldo+ importe);
}

const registro = new Persona(prompt("Ingrese su nombre"), parseInt(prompt("Ingrese el dinero que dispone")));

let operacion = parseInt(prompt("Desea realizar alguna operación\n 0)-no\n 1) si"));
while (operacion === 1) {
  let tipo = parseInt(prompt("Si desea agregar credito ingrese 0 si desea restar ingrese 1"));
  if (tipo === 0) {
    alert("El saldo que tiene es "+ sumar(parseInt(prompt("Ingrese el valor de la operación realizada"))));
  } else {
    alert("El saldo que tiene es"+ restar(parseInt(prompt("Ingrese el valor de la operación realizada"))));
  }
  operacion = parseInt(prompt("Si desea continuar ingresando operaciones ingrese 1"));
}
