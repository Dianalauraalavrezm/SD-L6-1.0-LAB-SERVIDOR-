// Task 3: addUser(first_name, last_name, email)
export async function addUser(first_name, last_name, email) {
    try {
        const response = await fetch("http://localhost:3000/users");
        const users = await response.json();
        const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
        const newStringId = String(newId);
        const newUser = { id: newStringId, first_name, last_name, email };
        const postResponse = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        });
        
        if (!postResponse.ok) {
            throw new Error(`Error: ${postResponse.status} - ${postResponse.statusText}`);
        }
        
        console.log("Usuario agregado:", newUser);
    } catch (error) {
        console.error("Error al agregar usuario:", error);
    }
}


    

