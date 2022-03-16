function Persona(nombre, saldo) {
  this.id;
  if(this.id==undefined){
    this.id=1;
  }else{
    this.id+=1;
  }
  this.nombre = nombre;
  this.saldo = saldo;
}

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

function controlAlert(valor){
  let resultado= restar(valor);
  if('Saldo insuficiente para la operación'== resultado){
    alert(resultado,'danger')
  }else{
   alert(resultado,'success')
  }
}

function crearUsuario(nombre, salario){
  console.log("ingreso");
  registro = new Persona (nombre, salario);
  registroJson = JSON.stringify(registro);
  localStorage.setItem(`Persona${registro.id}`,registroJson);
  localStorage.setItem(`PersonaActiva`, registroJson);
  return(`Se dio de alta correctamente el usuario ${registro.nombre}`);
}

function agregarTabla(valor){

}

function restar(valor) {
  registro=JSON.parse(localStorage.getItem('PersonaActiva'));
  if (registro.saldo >= valor) {
      registro.saldo -= valor;
      return (`El saldo actual es de ${registro.saldo}`);
  } else {
      return ( `Saldo insuficiente para la operación`);
  }
}

function sumar(valor) {
  console.log(registro)
  registro.saldo += parseInt(valor);
  return (`El saldo actual es de ${registro.saldo}`);

}


const main = document.getElementById("main");
let importe = parseInt(document.getElementById("monto").value);
let saldo =document.getElementById("saldo").value;

const movimientos = new Array();

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var ingreso = document.getElementById('ingreso')


ingreso.onclick = ()=>{ 
    alert(sumar(parseInt(document.getElementById("monto").value)), 'success');
  };

let egreso = document.getElementById("egreso");
egreso.onclick = () =>{controlAlert(parseInt(document.getElementById("monto").value))};

let ingresoUsuario =document.getElementById("ingresaUsuario");
ingresoUsuario.onclick = () =>{
    alert(crearUsuario(document.getElementById('nombre').value , parseInt(document.getElementById('salario').value)), 'success');
}

for (let i = 0; i < movimientos.length; i++) {
  console.log("El movimiento " + i + " es de $ " + movimientos[i]);
}


