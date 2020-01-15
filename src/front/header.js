import React, { Component } from 'react';
import myhe from '../img/header.jpg';
import './header.scss';
import axios from 'axios';


class header extends Component{ 
    constructor(props) {
        super(props)
        this.state = {
          list : [],
        }
        
      }
    componentWillMount() {
        this._getData();
      }
    _getData = async () => {
        const res = await axios.get('/header/data');
        
        if(res.data[0] === undefined) {
          let cover = [];
          cover.push(res.data);

          return this.setState({ list : cover })
        }
        this.setState({ list : res.data });
      }
    render(){
        const { list } = this.state;
        return(
            <div className= "header">
                 {list.length !== 0 ? list.map( (el, key) => {
                    console.log(el.png);
                    return(  
                            <img src={el.png} alt="header img" key={key}></img> 
                    )
              }) : 
                
                <img src={myhe} alt="header img"></img> 
            } 
            </div>
        )
    }
}

export default header;