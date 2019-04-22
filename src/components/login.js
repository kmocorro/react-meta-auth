import React from 'react';
import { navigate } from 'gatsby';
import { handleLogin, isLoggedIn } from '../services/auth';

class Login extends React.Component {   

    state = {
        username: ``,
        password: ``,
    }

    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        handleLogin(this.state);
    }

    render(){
        if(isLoggedIn()){
            navigate(`/app/profile`); // gats
        }

        return (
            <div>
                <h1>Login</h1>
                <form
                    method="post"
                    onSubmit={event => {
                        this.handleSubmit(event);
                        navigate(`/app/profile`);
                    }}
                >
                    <label>
                        Username
                        <input type="text" name="username" onChange={this.handleUpdate} />
                    </label>
                    <label>
                        Password
                        <input type="password" name="password" onChange={this.handleUpdate} />
                    </label>
                    <input type="submit" values="login" />
                </form>
            </div>
        )
    }

}

export default Login