let totalIngresos = 0;
let totalEgresos = 0;
let total = 0;

document.getElementById(`agregaritem`).onclick = function(event) {
    event.preventDefault();

let fecha = document.getElementById('fecha').value;
let cliente = document.getElementById('cliente').value;
let detalle = document.getElementById('detalle').value;
let cantidad = parseFloat(document.getElementById('cantidad').value);
let ingreso = parseFloat(document.getElementById('ingreso').value);
let egreso = parseFloat(document.getElementById('egreso').value);
let parcial = cantidad * ingreso - egreso;

totalIngresos += ingreso * cantidad;
totalEgresos += egreso * cantidad;
total = totalIngresos - totalEgresos;

const nuevoItem = {
    fecha,
    cliente,
    detalle,
    cantidad,
    ingreso,
    egreso,
    parcial,
    
};

document.getElementById('totalIngresos').textContent = `Total Ingresos: ${totalIngresos.toFixed(2)}`;
    document.getElementById('totalEgresos').textContent = `Total Egresos: ${totalEgresos.toFixed(2)}`;
document.getElementById('total').textContent = `Total : ${total.toFixed(2)}`;


guardarLocalStorage(nuevoItem);

// Actualiza la tabla
agregarAWrow(nuevoItem);

// Limpia los campos después de agregar
//limpiarCampos();

//};

function guardarLocalStorage(item) {
    let items = JSON.parse(localStorage.getItem(`items`)) || [];
    items.push(item);
    localStorage.setItem(`items`, JSON.stringify(items));
}

function agregarAWrow(item) {
    const tableBody = document.getElementById('Tabla').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    newRow.insertCell(0).textContent = item.fecha;
    newRow.insertCell(1).textContent = item.cliente;
    newRow.insertCell(2).textContent = item.detalle;
    newRow.insertCell(3).textContent = item.cantidad;
    newRow.insertCell(4).textContent = item.ingreso;
    newRow.insertCell(5).textContent = item.egreso;
    newRow.insertCell(6).textContent = item.parcial;
}

}

