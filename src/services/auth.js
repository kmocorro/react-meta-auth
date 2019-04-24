import axios from 'axios';

export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
    isBrowser() && window.localStorage.getItem('metaUser')
    ? JSON.parse(window.localStorage.getItem('metaUser'))
    : {}

const setUser = user => 
    window.localStorage.setItem('metaUser', JSON.stringify(user));

// login handler
export const handleLogin = ({ username, password }) => {

    console.log(username, password);

    axios.post('http://10.3.10.209:8080/api/login', {username: username, password: password})
    .then(function(response){
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

    if(username === `kevin` && password === `pass`){
        /*
        return setUser({
            username: `kevin`,
            name: `Kevin Mocorro`,
            email:  `kevin.mocorro@sunpowercorp.com`,
        }); */
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