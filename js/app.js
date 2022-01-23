let list = document.getElementById('list');
const btnAgregar = document.getElementById('btn-agregar');

btnAgregar.addEventListener('click', () => {
  let textoParaAgregar = window.prompt("texto p/ agregar"/*,"ingrese aquí el texto"*/);
  let nuevoItem = document.createElement('li');
  nuevoItem.appendChild(document.createTextNode(textoParaAgregar));
  list.appendChild(nuevoItem);
});