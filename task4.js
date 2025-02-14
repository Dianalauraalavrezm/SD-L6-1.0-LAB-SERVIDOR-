
export async function delUser(id) {
    try {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        });

        if (response.ok) {
            console.log(`Usuario con ID ${id} eliminado.`);
        } else {
            console.error(`Error al eliminar usuario con ID ${id}:`, response.statusText);
        }
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
    }
}

