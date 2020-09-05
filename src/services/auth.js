export async function login({ email, password }) {
    const response = await fetch('http://moboclinic.herokuapp.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    })
    return response
}

export async function logOut() {}

// signup
