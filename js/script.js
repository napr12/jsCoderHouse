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
  this.monto=monto;
  this.idMovimiento;
  this.tipoMovimiento = document.getElementById("tipoMovimiento");
  const movimientoAnterior = JSON.parse(localStorage.getItem("Movimiento"));
  if (this.idMovimiento==null){
    this.idMovimiento=1;
  }else{
    this.idMovimiento = movimientoAnterior.idMovimiento + 1 ;
  }
  
}
function crearMovimiento(monto){
  let idPersona= JSON.parse(localStorage.getItem("PersonaActiva"));
  const jsonMoviemiento = JSON.parse(localStorage.getItem("Movimiento"));
  let registro = new Movimiento(idPersona.id, monto); 
  const registroJson = [];
  if(jsonMoviemiento == null){
    registroJson[0]= registro;
  }else{
    for(let i=0; i<jsonMoviemiento.length; i++){
        registroJson [i] = jsonMoviemiento[i];
        registroJson.push(registro);
    }

  }
  return(JSON.stringify(registroJson));

}

function controlAlert(valor){
  let resultado= restar(valor);
  if('Saldo insuficiente para la operación'== resultado){
    Toastify({ text: resultado, className: "danger", style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }}).showToast();
  }else{
    Toastify({ text: resultado, className: "success", style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }}).showToast();
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

function agregarTabla(){
  let body = document.getElementById("tbody");
  let tr = document.createElement("tr");
  let personaActiva = JSON.parse(localStorage.getItem("PersonaActiva"));
  let jsonMoviemiento = JSON.parse(localStorage.getItem("Movimiento"));
  for(let i = 0; i < jsonMoviemiento.length; i++){
    if(personaActiva.id === jsonMoviemiento[i].idPersona){
      tr.append(`
      <th scope="row">${jsonMoviemiento[i].idMovimiento}</th>
      <td>${date()}</td>
      <td>${jsonMoviemiento[i].tipoMovimiento}</td>
      <td>${jsonMoviemiento[i].monto}</td>
    `);
    }
  }
  body.innerHTML(tr);

}

function restar(valor) {
  registro=JSON.parse(localStorage.getItem('PersonaActiva'));
  if (registro.saldo >= valor) {
      registro.saldo -= valor;
      localStorage.setItem(`PersonaActiva`,JSON.stringify(registro));
      localStorage.setItem(`Movimiento`,crearMovimiento(registro));
      agregarTabla();
      return (`El saldo actual es de ${registro.saldo}`);
  } else {
      return ( `Saldo insuficiente para la operación`);
  }
}

function sumar(valor) {
  registro=JSON.parse(localStorage.getItem('PersonaActiva'));
  registro.saldo += parseInt(valor);

  localStorage.setItem(`PersonaActiva`,JSON.stringify(registro));
  localStorage.setItem(`Movimiento`,crearMovimiento(registro));
  agregarTabla();
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
ingreso.onclick = ()=> Toastify({ text: sumar(parseInt(document.getElementById("monto").value)), className: "success", style: {
  background: "linear-gradient(to right, #00b09b, #96c93d)",
}}).showToast();
egreso.onclick = () => controlAlert(parseInt(document.getElementById("monto").value));
ingresoUsuario.onclick = () => Toastify({ text: crearUsuario(document.getElementById('nombre').value , parseInt(document.getElementById('salario').value)), className: "success", style: {
  background: "linear-gradient(to right, #00b09b, #96c93d)",
}}).showToast();