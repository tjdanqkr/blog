import React, { Component } from 'react';
import axios from 'axios';

class login extends Component{
    constructor(props){
        super(props);
        this.state ={
            login: false,
            
        }
    }
    handlelogin=(e)=> {
        const  value  = e.target.value;
        
        this.setState({
          uid : value
        });
      }
    handleloginpass=(e)=>{
        
        const  value  = e.target.value;
        
        this.setState({
          pass : value
        });
    
      }
      loginact = async (e) =>{
        e.preventDefault();
        const uid = this.state.uid;
        const pass = this.state.pass;
        const res = await axios('/loginact/data', {
          method: 'POST',
          data: { 'data': uid,
                   'data2': pass
        },
          
          headers: new Headers()
        })
        if (res.data) {
          if (res.data[0] === undefined) { 
            console.log("fail");
            return this.setState({ login: false })
          }
          console.log("sussess");
          this.setState({ login: true });
          this.props.loginac(this.state.login);
        }
      }

    render(){
        const {uid} = this.state;
        const {pass} = this.state;

        return(
            <div className= "login">
              <form onSubmit={this.loginact} method="post">
                <input type="text" value={uid} onChange={this.handlelogin} placeholder="id"/>
                <input type="password" value={pass} onChange={this.handleloginpass} placeholder="password"/>
                <input type="submit" value="로그인"/>
              </form>
            </div>
        );
    }

}
export default login;