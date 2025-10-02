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

let ingresos = [
  { descripcion: "Quincena", valor: 9000 },
  { descripcion: "Venta", valor: 400 }
];

let egresos = [
  { descripcion: "Renta", valor: 900 },
  { descripcion: "Ropa", valor: 400 }
];

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
