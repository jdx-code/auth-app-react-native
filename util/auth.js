import axios from "axios"

const API_KEY = 'AIzaSyA5IWzEkYZbLvHo3izkWfuKz2vnNyLwt40'

export async function createUser(email, password) {
    const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=' + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    );
}