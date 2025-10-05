 import { Ingreso } from './Ingreso.js';
 import { Egreso } from './Egreso.js';

//Arreglos
const ingresos = [
  new Ingreso('Salario', 20000),
  //new Ingreso('Venta auto', 50000),
];

const egresos = [
  new Egreso('Renta', 4000),
  //new Egreso('Ropa', 800),
  
];

// Función flecha para formatear valores como porcentaje
const formatoPorcentaje = valor => {
  return valor.toLocaleString('es-MX', {
    style: 'percent',
    minimumFractionDigits: 2
  });
};

// Función flecha para formatear valores como moneda MXN
const formatoMoneda = valor => {
  return valor.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2
  });
};

// Función flecha para calcular el total de ingresos
const totalIngresos = () => {
  let totalIngreso = 0;
  for (const ingreso of ingresos) {
    totalIngreso += ingreso.valor;
  }
  return totalIngreso;
};

// Función flecha para calcular el total de egresos
const totalEgresos = () => {
  let totalEgreso = 0;
  for (const egreso of egresos) {
    totalEgreso += egreso.valor;
  }
  return totalEgreso;
};

// Función flecha para cargar el cabecero
const cargarCabecero = () => {
  const presupuesto = totalIngresos() - totalEgresos();
  const porcentajeEgreso = totalEgresos() / totalIngresos();

document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);

  if (formatoPorcentaje(porcentajeEgreso) !== 'NaN%' && formatoPorcentaje(porcentajeEgreso) !== '∞%') {
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
  } else {
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(0);
  }
  
  //document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
  document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
  document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());

  // console.log(formatoMoneda(presupuesto));
  // console.log(formatoPorcentaje(porcentajeEgreso));
  // console.log(formatoMoneda(totalIngresos()));
  // console.log(formatoMoneda(totalEgresos()));
};

function cargarApp() {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
};

const cargarIngresos = () => {
  let ingresosHTML = '';
  for (const ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
};

const crearIngresoHTML = ingreso => {
  let ingresoHTML = `<div class="elemento limpiarEstilos">`;
  ingresoHTML += `<div class="elemento_descripcion">${ingreso.descripcion}</div>`;
  ingresoHTML += `<div class="derecha limpiarEstilos">`;
  ingresoHTML += `<div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>`;
  ingresoHTML += `<div class="elemento_eliminar">`;
  ingresoHTML += `<button class="elemento_eliminar--btn">`;
  ingresoHTML += `<ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>`;
  ingresoHTML += `</button>`;
  ingresoHTML += `</div>`;
  ingresoHTML += `</div>`;
  ingresoHTML += `</div>`;
  return ingresoHTML;
};

const cargarEgresos = () => {
  let egresosHTML = '';
  for (const egreso of egresos) {
    egresosHTML += crearEgresoHTML(egreso);
  }
  document.getElementById('lista-egresos').innerHTML = egresosHTML;
};

const crearEgresoHTML = egreso => {
  let egresoHTML = `<div class="elemento limpiarEstilos">`;
  egresoHTML += `<div class="elemento_descripcion">${egreso.descripcion}</div>`;
  egresoHTML += `<div class="derecha limpiarEstilos">`;
  egresoHTML += `<div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>`;
  egresoHTML += `<div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor / totalEgresos())}</div>`;
  egresoHTML += `<div class="elemento_eliminar">`;
  egresoHTML += `<button class="elemento_eliminar--btn">`;
  egresoHTML += `<ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>`;
  egresoHTML += `</button>`;
  egresoHTML += `</div>`;
  egresoHTML += `</div>`;
  egresoHTML += `</div>`;
  return egresoHTML;
};

const eliminarEgreso = id => {
  const indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
  egresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarEgresos();
};

const eliminarIngreso = id => {
  const indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
  ingresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarIngresos();
};

const agregarDato = () => {
  const forma = document.forms['forma'];
  const tipo = forma['tipo'];
  const descripcion = forma['descripcion'];
  const valor = forma['valor'];
  
  if (descripcion.value !== '' && valor.value !== '') {
    if (tipo.value === 'ingreso') {
      ingresos.push(new Ingreso(descripcion.value, +valor.value));
      cargarIngresos();
      cargarCabecero();
    } else if (tipo.value === 'egreso') {
      egresos.push(new Egreso(descripcion.value, +valor.value));
      cargarEgresos();
      cargarCabecero();
    }
  }
  descripcion.value = '';
  valor.value = '';
};

window.addEventListener('load', cargarApp);
document.getElementById('agregarValor_btn').addEventListener('click', agregarDato);

window.eliminarEgreso = eliminarEgreso;
window.eliminarIngreso = eliminarIngreso;