const API_URL = "http://localhost:3000/parties"; // Cambia esta URL según tu API

document.getElementById('partyForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const partySize = document.getElementById('party_size').value;
    const creatorId = document.getElementById('creator_id').value;
    const levelCap = parseInt(document.getElementById('level_cap').value);
    const ilvlCap = parseInt(document.getElementById('ilvl_cap').value);
    const partyRole = document.getElementById('party_role').value;
    const plannedStart = document.getElementById('planned_start').value;

    // Validaciones
    const currentDate = new Date();
    const [datePart, timePart] = plannedStart.split('_');
    const [day, month, year] = datePart.split('/').map(Number);
    const [hours, minutes] = timePart.split(':').map(Number);
    
    const plannedDate = new Date(year, month - 1, day, hours, minutes);
    
    if (!partySize || !creatorId || !levelCap || !ilvlCap || !partyRole || !plannedStart) {
        displayMessage('Todos los campos son obligatorios.', 'error');
        return;
    }

    if (plannedDate <= currentDate) {
        displayMessage('La fecha y hora deben ser futuras.', 'error');
        return;
    }

    if (levelCap <= 0 || ilvlCap <= 0) {
        displayMessage('Los valores de Level Cap e Item Level Cap deben ser positivos.', 'error');
        return;
    }

    // Crear el objeto de la party
    const partyData = {
        party_size: partySize,
        creator_id: creatorId,
        level_cap: levelCap,
        ilvl_cap: ilvlCap,
        party_role: partyRole,
        planned_start: plannedStart,
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(partyData),
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud de la API');
        }

        const createdParty = await response.json();
        displayMessage(`Party creada exitosamente: ${JSON.stringify(createdParty)}`, 'success');
    } catch (error) {
        displayMessage(`Error: ${error.message}`, 'error');
    }
});

// Función para mostrar mensajes
function displayMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type; // Puedes aplicar estilos CSS para mensajes de error y éxito
}
