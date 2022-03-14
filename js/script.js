function Persona(nombre, saldo) {
  this.nombre = nombre;

  this.saldo = saldo;
}

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

function restar(valor) {
  if (registro.saldo >= valor) {
      registro.saldo = registro.saldo - valor;
      return (`El saldo actual es de ${registro.saldo}`);
  } else {
      return ( `Saldo insuficiente para la operación`);
  }
}

function sumar(valor) {
  console.log(registro)
  registro.saldo += parseInt(valor);
  return (` El saldo actual es de ${registro.saldo}`);

}


const main = document.getElementById("main");
let importe = parseInt(document.getElementById("monto").value);
let saldo =document.getElementById("saldo").value;
let nombre = "Nahuel";
const movimientos = new Array();
const registro = new Persona(nombre, importe); 
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('ingreso')


ingreso.onclick = () => { 
    alert(sumar(importe), 'success')
  };

let egreso = document.getElementById("egreso");
egreso.onclick = () => {let resultado= restar(importe);
                        if('Saldo insuficiente para la operación'==resultado){
                          alert(resultado,'danger')
                        }else{
                          alert(resultado,'success')
                        }
  };



for (let i = 0; i < movimientos.length; i++) {
  console.log("El movimiento " + i + " es de $ " + movimientos[i]);
}
