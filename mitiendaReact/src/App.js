import React, { Component } from 'react';
import fire from './config/fire';
import Login from './Login';
import Home from './Components/Home';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user:{}
    }
  }

  componentDidMount(){
    this.authListener();
  }


  //VERIFICA Y ACTUALIZA EN EL ESTADO EL USUARIO
  authListener(){
    fire.auth().onAuthStateChanged( (user) => {
      //console.log(user);
      if (user) {
        this.setState({user});
        //localStorage.setItem('user', user.uid);
      } else {
        this.setState({user:null});
        //localStorage.removeItem('user');
      }
    })
  }

  //DECIDE SI EL USUARIO ES ACTIVO ABRE EL COMPONENTE HOME
  // SI NO ESTA ACTIVO ABRE EL COMPONENTE LOGIN
  render() {
    return (
      <div className="mifondoLogin" >
    {this.state.user ? (<Home />) :  (<Login />)}
      </div>
    );
  }
}

export default App;
