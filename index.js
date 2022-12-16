// Add your code here
function submitData(username, email){
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": username,
            "email": email
        }),
    }
    return fetch("http://localhost:3000/users", configurationObject);
}