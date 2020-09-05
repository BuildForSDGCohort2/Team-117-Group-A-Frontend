const AUTH_TOKEN_URL = 'https://moboclinic.herokuapp.com/oauth/token'
const CLIENT_SECRET = 'ITmyHWDr3bGtDRgJi5St9lRU7Tg5vdrJs80TLGRD'

const acquireToken = async (username, password) => {
    const authBody = {
        grant_type: 'password',
        client_id: 11,
        client_secret: CLIENT_SECRET,
        username,
        password,
        provider: 'users',
    }
    const response = await fetch(AUTH_TOKEN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authBody),
    })
    const { access_token } = await response.json()
    return access_token
}

export async function login(username, password) {
    const token = await acquireToken(username, password)
    try {
        const response = await fetch('https://moboclinic.herokuapp.com/api/user', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        })
        const user = await response.json()
        return user
    } catch (error) {
        console.log(error)
    }
}

export async function logOut() {}

// signup
