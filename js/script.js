function Persona(nombre, saldo) {
  this.id;
  let idPersonas=JSON.parse(localStorage.getItem("Persona"));
  console.log(idPersonas);
  if(idPersonas==null){
    this.id=1;
    localStorage.setItem(`id`,this.id);
  }else{
    this.id= parseInt(localStorage.getItem(`id`))+1;
    localStorage.setItem(`id`,this.id);
  }
  this.nombre = nombre;
  this.saldo = saldo;
}
function Movimiento(idPersona,monto){
  this.idPersona=idPersona;
  this.idMovimiento= JSON.parse(localStorage.getItem("Movimiento"));
  if (this.idMovimiento.idMovimiento==null){
    this.idMovimiento.idMovimiento=1;
  }else{
    this.idMovimiento.idMovimiento++;
  }
}
function crearMovimiento(monto){
  let idPersona= JSON.parse(localStorage.getItem("PersonaActiva"));
  let dinero=monto;
  return(Movimiento(idPersona.id, dinero));

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
  const jsonPersona = JSON.parse(localStorage.getItem("Persona"));
  let registro = new Persona (nombre, salario);
  const registroJson = [];
  if(jsonPersona== null){
   registroJson[0]=registro;
   console.log(`${registroJson[0]} primer ingreso`); 
  }else{
    for(let i=0; i<jsonPersona.length; i++){
      registroJson[i]= jsonPersona[i];
    }
    registroJson.push(registro);
  }
  localStorage.setItem(`Persona`,JSON.stringify(registroJson));
  localStorage.setItem(`PersonaActiva`, JSON.stringify(registro));
  return(`Se dio de alta correctamente el usuario ${registro.nombre}`);
}

function agregarTabla(valor){
  let body = document.getElementById("tbody");
  let tr = document.createElement("tr");
  let personaActiva = JSON.parse(localStorage.getItem("PersonaActiva"));

  tr.innerHTML(`
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  `);

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
  //agregarTabla(parseInt(valor));
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


