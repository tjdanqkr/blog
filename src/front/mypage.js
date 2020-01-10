import React, { Component } from 'react';
import Header from './header';
import Leftside from './rightside';
class mypage extends Component{
    render(){
        return(
            <div>
                <Header></Header>
                
                
                <Leftside></Leftside>
                
            </div>
        )
    }
}

export default mypage;