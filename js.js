"use strict";
var forma = document.getElementById("Formulario"),
txtNombre = forma["Nombre"],
txtApellidoPAterno= forma["Apellido_Paterno"],
txtApellidoMaterno= forma["Apellido_Materno"],
txtBoleta= forma["Boleta"],
txtGrupo= forma["Grupo"],
txtMateria= forma["Materia"],
txtFecha= forma["Fecha"],
salidaNombre = document.getElementById("salida_nombre"),
salidaApeliidoPaterno = document.getElementById("salida_ApellidoP"),
salidaApellidoMaterno = document.getElementById("salida_ApellidoM"),
salidaBoleta = document.getElementById("salida_boleta"),
salidaGrupo = document.getElementById("salida_grupo"),
salidaMateria = document.getElementById("salida_materia"),
salidaFecha = document.getElementById("salida_fecha")


function procesa() {
console.log("Entro a funcion procesa")

salidaNombre.textContent = txtNombre.value;
salidaApeliidoPaterno.textContent =txtApellidoPAterno.value;
salidaApellidoMaterno.textContent =txtApellidoMaterno.value;
salidaGrupo.textContent =txtGrupo.value;
salidaMateria.textContent =txtMateria.value;
salidaFecha.textContent = txtFecha.value;
salidaBoleta.textContent = txtBoleta.value;

}

function limpiar() {
console.log("Entro a funcion limpiar")

salidaNombre.textContent = "";
salidaApeliidoPaterno.textContent= "";
salidaApellidoMaterno.textContent = "";
salidaGrupo.textContent = "";
salidaMateria.textContent = "";
salidaFecha.textContent = "";
salidaBoleta.textContent = "";

txtNombre.value="";
txtApellidoPAterno.value="";
txtApellidoMaterno.value="";
txtGrupo.value="";
txtMateria.value="";
txtFecha.value="";
txtBoleta.value="";

}