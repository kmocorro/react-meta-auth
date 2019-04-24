import axios from 'axios';

export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
    isBrowser() && window.localStorage.getItem('metaUser')
    ? JSON.parse(window.localStorage.getItem('metaUser'))
    : {}

const setUser = user => 
    window.localStorage.setItem('metaUser', JSON.stringify(user));

// login handler
export const handleLogin = async ({ username, password }) => {

    console.log(username, password);
    let credentials = {username: username, password: password};

    try {
        const response = await axios.post('http://10.3.10.209:8080/api/login', credentials);
        console.log(response);
    } catch(err){
        console.log(err);
    }

    return false

}

export const isLoggedIn = () => {

    const user = getUser();

    return !!user.username;
}

export const logout = callback => {
    setUser({});
    callback();
}