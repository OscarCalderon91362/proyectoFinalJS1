 import { Ingreso } from './Ingreso.js';
 import { Egreso } from './Egreso.js';

//Arreglos
const ingresos = [
  new Ingreso('Salario', 20000),
  new Ingreso('Venta auto', 50000)
];

const egresos = [
  new Egreso('Renta', 4000),
  new Egreso('Ropa', 800)
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

  console.log(formatoMoneda(presupuesto));
  console.log(formatoPorcentaje(porcentajeEgreso));
  console.log(formatoMoneda(totalIngresos()));
  console.log(formatoMoneda(totalEgresos()));
};

cargarCabecero();
