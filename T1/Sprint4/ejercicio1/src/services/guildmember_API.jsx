// Usa la variable de entorno o prop para la URL de la API
const API_URL = "http://localhost:3000/guildmembers";

// Fetch todos los miembros
export const fetchMembers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al cargar los datos");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch Members Error:", error);
    throw error;
  }
};

// Añadir un nuevo miembro
export const addMember = async (newMember) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMember),
    });
    if (!response.ok) {
      throw new Error("Error al crear el miembro");
    }
    return await response.json();
  } catch (error) {
    console.error("Add Member Error:", error);
    throw error;
  }
};

// Editar un miembro existente
export const editMember = async (userId, updatedMember) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMember),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar el miembro");
    }
    return await response.json();
  } catch (error) {
    console.error("Edit Member Error:", error);
    throw error;
  }
};

// Eliminar un miembro
export const deleteMember = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar el miembro");
    }
    return true;
  } catch (error) {
    console.error("Delete Member Error:", error);
    throw error;
  }
};

// Fetch team members
export const fetchTeam = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener la lista de miembros.");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch Team Error:", error);
    throw error;
  }
};

// Delete member by ID
export const deleteMemberById = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Error al eliminar el miembro: ${response.statusText}`);
    }
    return true;
  } catch (error) {
    console.error("Delete Member Error:", error);
    throw error;
  }
};

// Bulk actions fetch functions
export const bulkDeleteMembers = async (userIds) => {
  try {
    const response = await fetch(`${API_URL}/bulk-delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userIds }),
    });
    if (!response.ok) {
      throw new Error("Error al eliminar los miembros.");
    }
    return await response.json();
  } catch (error) {
    console.error("Bulk Delete Members Error:", error);
    throw error;
  }
};

// Member edit fetch function
export const updateMember = async (userId, updatedMember) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMember),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar el miembro.");
    }
    return await response.json();
  } catch (error) {
    console.error("Update Member Error:", error);
    throw error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchMembers,
  addMember,
  editMember,
  deleteMember,
  fetchTeam,
  deleteMemberById,
  bulkDeleteMembers,
  updateMember,
};