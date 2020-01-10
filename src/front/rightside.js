import React, { Component } from 'react';
import './rightside.scss'
const onsel = (e)=> {

}
class leftside extends Component {
    
    
    state = {
        value: ''
    }
    

    handleChang = (e) =>{
        const {value}= e.target;
        this.setState({
            value: value
        });
        
    }
    onsel = () =>{
        
        const {value} = this.state;
        this.setState({
            value: value
        })
        console.log(value);
        console.log('셀렉');
        
    }
    handlekey = (e) => {
        
        if(e.key === 'Enter'){
            this.onsel();
        }
    }
    render(){
        const value = this.value;
        return(
            <div className="rightside">
                <input value={value} onChange={this.handleChang} onKeyPress={this.handlekey}></input>
                <button onClick={this.onsel}> 검색</button>
            </div>
        );
    }
    
}

export default leftside;