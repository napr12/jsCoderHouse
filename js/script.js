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
  let wrapper = document.createElement('div')
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
  let registro = new Persona (nombre, salario);
  let registroJson = localStorage.getItem("Persona");
  registroJson += JSON.stringify(registro); 
  localStorage.setItem(`Persona`,registroJson);
  localStorage.setItem(`PersonaActiva`, JSON.stringify(registro));
  return(`Se dio de alta correctamente el usuario ${registro.nombre}`);
}

function agregarTabla(valor){

}

function restar(valor) {
  registro=JSON.parse(localStorage.getItem('PersonaActiva'));
  if (registro.saldo >= valor) {
      registro.saldo -= valor;
      localStorage.setItem(`PersonaActiva`,JSON.stringify(registro));
      return (`El saldo actual es de ${registro.saldo}`);
  } else {
      return ( `Saldo insuficiente para la operación`);
  }
}

function sumar(valor) {
  registro=JSON.parse(localStorage.getItem('PersonaActiva'));
  registro.saldo += parseInt(valor);
  localStorage.setItem(`PersonaActiva`,JSON.stringify(registro));
  return (`El saldo actual es de ${registro.saldo}`);

}


let importe = parseInt(document.getElementById("monto").value);
let saldo =document.getElementById("saldo").value;
let alertPlaceholder = document.getElementById('liveAlertPlaceholder');

//Botones
let ingreso = document.getElementById('ingreso');
let egreso = document.getElementById("egreso");
let ingresoUsuario =document.getElementById("ingresaUsuario");

//Eventos
ingreso.onclick = ()=> alert(sumar(parseInt(document.getElementById("monto").value)), 'success');
egreso.onclick = () => controlAlert(parseInt(document.getElementById("monto").value));
ingresoUsuario.onclick = () => alert(crearUsuario(document.getElementById('nombre').value , parseInt(document.getElementById('salario').value)), 'success');


