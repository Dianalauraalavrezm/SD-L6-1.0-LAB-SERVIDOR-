// Task 2: listUsers()
export async function listUsers() {
    try {
        // Realizar la solicitud GET para obtener la lista de usuarios
        const response = await fetch("http://localhost:3000/users");
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        
        const users = await response.json();
        
        console.log(users);
    } catch (error) {
        console.error("Error al obtener la lista de usuarios:", error);
    }
}

listUsers()