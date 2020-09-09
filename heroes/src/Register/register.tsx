import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';
import { defaultCipherList } from 'constants';

interface RegisterState{
    email:string,
    password:string,
}

export default class Register extends React.Component <any, RegisterState>{



    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.registerData = this.registerData.bind(this);
    }

    registerData() {
        let storage = window.sessionStorage;
        let modelState = this.state;
        storage.setItem('email', modelState.email);
        storage.setItem('password', modelState.password);
        this.props.history.push('/')
    }

    render() {
        let canRegister = this.state.email != "" && this.state.password != "";
        return (
            <form className="registerForm">
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => this.setState({ email: e.target.value })} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                </div>

                <button type="submit" className="btn btn-primary" disabled={!canRegister} onClick={this.registerData}>Register!</button>
            </form>

        );
    }
}
