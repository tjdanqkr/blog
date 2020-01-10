import React, { Component } from 'react';
import myhe from '../img/header.jpg'
import './header.css'


class header extends Component{
    render(){
        return(
            <div className= "header">
                <img src={myhe} alt="header img"></img>
            </div>
        )
    }
}

export default header;