let turnos = [];
const turnoForm = document.getElementById('turnoForm');
const listaTurnos = document.getElementById('listaTurnos');

turnoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const hora = document.getElementById('hora').value;
  const club = document.getElementById('club').value;

  const turno = { id: Date.now(), nombre, hora, club };
  turnos.push(turno);

  mostrarTurnos();
  turnoForm.reset();
});

function mostrarTurnos() {
  listaTurnos.innerHTML = '';
  turnos.forEach((turno) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div>
        <strong>${turno.nombre}</strong><br>
        <span>⏰ ${turno.hora} - 📍 ${turno.club}</span>
      </div>
      <button onclick="unirseTurno(${turno.id})">Unirse</button>
    `;
    listaTurnos.appendChild(li);
  });
}

function unirseTurno(id) {
  const turno = turnos.find((t) => t.id === id);
  alert(`Te has unido al turno de ${turno.nombre} en ${turno.club} a las ${turno.hora}`);
}
