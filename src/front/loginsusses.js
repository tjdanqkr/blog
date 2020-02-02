import React, { Component } from 'react';


class logibsusses extends Component {
    constructor(props){
        super(props);
        this.state ={
            login: true,
            inputp: false
        }
    }
    logoute =(e) =>{
        e.preventDefault();
        this.setState({login:false});
        this.props.logout(this.state.login);
    }
    boardgo =(e) =>{
        e.preventDefault();
        this.setState({inputp:true});
        this.props.boardpl(this.state.inputp);
        
    }

    render(){
        return(
            <div className="sussess">
                
                    <ul>
                        <li><form onSubmit={this.boardgo} method="post"><input type="submit" value="글쓰기"/></form></li> 
                        <li><form onSubmit={this.logout} method="post"><input type="submit" value="로그아웃"/></form></li>
                    </ul>
                
            </div>
            )
    }

}
export default logibsusses;
