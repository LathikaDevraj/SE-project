import React, { Component } from 'react';

import Home from './home';
class Login extends Component {
    state = {
        loggedIn: true
    }
    
    render(){
        
        if (this.state.loggedIn) {
           
            return (
             <Home />   
    
        );
    }
}
    }
export default Login;