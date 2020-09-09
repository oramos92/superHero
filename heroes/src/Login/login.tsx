import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';

interface LoginState {
    user: User
}
interface User {
    email: string,
    password: string,
}


export default class Login extends React.Component<any, LoginState> {

    constructor(props: any) {
        super(props);
        this.state = {
            user: {
                email: "",
                password: ""
            }
        };
        this.login = this.login.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
    }

    login() {
        let user = this.state.user;
        let storedData = {
            email: sessionStorage.getItem('email'),
            password: sessionStorage.getItem('password')
        } as User;

        if (user.email === storedData.email && user.password === storedData.password){
            this.props.history.push('/home')
        }else{
            alert("Apestas")
        }

    }

    onChangeModel(property: string, value: string) {
        let model = { ...this.state };
        if (property === "email" || property === "password") {
            model.user[property] = value;
        } else {
            return;
        }

        this.setState({ user: model.user })
    }

    render() {
        let canLogin = this.state.user.email != "" && this.state.user.password != "";
        return (
            <form className="loginForm">
                <h1 className="loginTitle">Login!</h1>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => this.onChangeModel("email", e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => this.onChangeModel("password", e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!canLogin} onClick={this.login}>Login</button>
                <br/>
                <Link to="/register">Register</Link>
            </form>
        )
    }

}

