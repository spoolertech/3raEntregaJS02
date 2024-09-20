document.getElementById(`agregaritem`).onclick = function(event) {
    event.preventDefault();

let fecha = document.getElementById('fecha').value;
let cliente = document.getElementById('cliente').value;
let detalle = document.getElementById('detalle').value;
let cantidad = parseFloat(document.getElementById('cantidad').value);
let valorun = parseFloat(document.getElementById('valorun').value);
let total = cantidad * valorun;

const nuevoItem = {
    fecha,
    cliente,
    detalle,
    cantidad,
    valorun,
    total
};

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
    newRow.insertCell(4).textContent = item.valorun;
    newRow.insertCell(5).textContent = item.total;
}}

