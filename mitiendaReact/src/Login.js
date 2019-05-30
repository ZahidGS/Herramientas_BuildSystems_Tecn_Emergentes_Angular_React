import React, { Component } from 'react';
import fire from './config/fire';

import './login.css';

class Login extends Component {

    // CARGA LOS PROPS PARA LOGIN
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    // FUNCION QUE VERIFICA USUARIO Y PASSWORD EN FIREBASE
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then( (u) => {})
            .catch( (error) =>{
                alert('el email o password no son correctos o estan vacíos');
                console.log('error al buscar en firebase', error);
            });
    }

    //ACTUALIZA EL TEXTO EN EL CAMPO ACTIVO
    handleChange(e) {
        console.log(e.target.name, e.target.value)
        this.setState({ [e.target.name]: e.target.value });
    }


    //RENDERIZA Y VALIDA FORMULARIO LOGIN
    render() {
        return(
            <div className="col-md-4 container">

                <h1>Login</h1>
                <form>

                    <div className="form-group">
                        <label>Email address</label>
                        <input value={this.setState.email} onChange={this.handleChange}
                            type="email" className="form-control" name="email" 
                            id="exampleInputEmail1" aria-describedby="emailHelp" 
                            required pattern="^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$"
                            placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input value={this.setState.password} onChange={this.handleChange} 
                            type="password" className="form-control" name="password"
                            required
                            id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
                    <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
                </form>
            </div>
        );
    }
}

export default Login;
