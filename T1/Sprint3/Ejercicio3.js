// script.js
const members = []; // Array para almacenar miembros
const membersBody = document.getElementById('membersBody');
const memberModal = document.getElementById('memberModal');
const modalTitle = document.getElementById('modalTitle');
const memberForm = document.getElementById('memberForm');
let currentEditingIndex = null;

// Función para renderizar miembros en la tabla
function renderMembers() {
    membersBody.innerHTML = '';
    members.forEach((member, index) => {
        const row = `
            <tr>
                <td>${member.user_id}</td>
                <td>${member.username}</td>
                <td>${member.level}</td>
                <td>${member.ilvl}</td>
                <td>${member.character_role}</td>
                <td>${member.guild_role}</td>
                <td>
                    <button onclick="editMember(${index})">Edit</button>
                    <button onclick="deleteMember(${index})">Delete</button>
                </td>
            </tr>
        `;
        membersBody.innerHTML += row;
    });
}

// Abre el modal para añadir un nuevo miembro
document.getElementById('addMemberBtn').addEventListener('click', () => {
    memberModal.style.display = 'block';
    modalTitle.textContent = 'Añadir Miembro';
    memberForm.reset();
    currentEditingIndex = null; // Resetear índice de edición
});

// Cerrar el modal
document.querySelector('.close').addEventListener('click', () => {
    memberModal.style.display = 'none';
});

// Añadir o editar miembro
memberForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userId = document.getElementById('user_id').value;

    // Validar si el user_id ya existe
    if (members.some(member => member.user_id === userId && currentEditingIndex !== members.indexOf(member))) {
        alert('El user_id ya existe.');
        return;
    }

    const newMember = {
        user_id: userId,
        username: document.getElementById('username').value,
        level: parseInt(document.getElementById('level').value),
        ilvl: parseInt(document.getElementById('ilvl').value),
        character_role: document.getElementById('character_role').value,
        guild_role: document.getElementById('guild_role').value,
        email: document.getElementById('email').value,
    };

    if (currentEditingIndex !== null) {
        members[currentEditingIndex] = newMember; // Actualiza miembro existente
    } else {
        members.push(newMember); // Añade nuevo miembro
    }

    renderMembers();
    memberModal.style.display = 'none'; // Cierra el modal
});

// Editar miembro
function editMember(index) {
    currentEditingIndex = index;
    const member = members[index];
    document.getElementById('user_id').value = member.user_id;
    document.getElementById('username').value = member.username;
    document.getElementById('level').value = member.level;
    document.getElementById('ilvl').value = member.ilvl;
    document.getElementById('character_role').value = member.character_role;
    document.getElementById('guild_role').value = member.guild_role;
    document.getElementById('email').value = member.email;

    memberModal.style.display = 'block'; // Abre el modal para edición
}

// Eliminar miembro
function deleteMember(index) {
    if (confirm('¿Estás seguro de que deseas eliminar este miembro?')) {
        members.splice(index, 1); // Elimina miembro
        renderMembers(); // Actualiza la tabla
    }
}
