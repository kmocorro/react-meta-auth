export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
    isBrowser() && window.localStorage.getItem('metaUser')
    ? JSON.parse(window.localStorage.getItem('metaUser'))
    : {}

const setUser = user => 
    window.localStorage.setItem('metaUser', JSON.stringify(user));

// login handler
export const handleLogin = ({ username, password }) => {

    fetch('http://10.3.10.209:8080/api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })

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