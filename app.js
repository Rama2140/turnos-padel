// Array para almacenar los turnos
let turnos = [];

// Captura el formulario
const turnoForm = document.getElementById('turnoForm');
const listaTurnos = document.getElementById('listaTurnos');

// Maneja la publicación del turno
turnoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  // Obtiene los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const hora = document.getElementById('hora').value;
  const club = document.getElementById('club').value;
  
  // Crea un nuevo turno
  const turno = {
    id: Date.now(),
    nombre,
    hora,
    club,
  };
  
  // Añade el turno al array
  turnos.push(turno);
  
  // Muestra los turnos
  mostrarTurnos();
  
  // Limpia el formulario
  turnoForm.reset();
});

// Función para mostrar los turnos en la página
function mostrarTurnos() {
  listaTurnos.innerHTML = '';
  turnos.forEach((turno) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${turno.nombre}</strong> publicó un turno a las ${turno.hora} en ${turno.club}.
      <button onclick="unirseTurno(${turno.id})">Unirse</button>
    `;
    listaTurnos.appendChild(li);
  });
}

// Función para unirse a un turno
function unirseTurno(id) {
  const turno = turnos.find((t) => t.id === id);
  alert(`Te has unido al turno de ${turno.nombre} en ${turno.club} a las ${turno.hora}`);
}

