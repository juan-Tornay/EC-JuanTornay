const API_BASE_URL = 'http://localhost:3000/guild_management'; // URL base de tu API en el puerto 3000

// Crear un nuevo miembro del gremio
export const createGuildMember = async (memberData) => {
  try {
    console.log('Sending data to API:', memberData);
    const response = await fetch(`${API_BASE_URL}/guildmembers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(memberData),
    });

    const responseText = await response.text();
    console.log('Raw response from API:', responseText);

    if (!response.ok) {
      console.error('Error response from API:', responseText);
      throw new Error(`Error al crear un nuevo miembro del gremio: ${responseText}`);
    }

    const data = JSON.parse(responseText);
    console.log('Parsed response from API:', data);
    return data;
  } catch (error) {
    console.error('Error al crear un nuevo miembro del gremio:', error);
    throw error;
  }
};