import React, { Component } from 'react';
import './rightside.scss';
import axios from 'axios';

class leftside extends Component {
    constructor(props) {
        super(props)
        this.state = {
          list1 : [],
        }
      }
      componentWillMount() {
        this._getData();
        
      }
      _getData = async () => {
        const res = await axios.get('/new/data');
        
        if(res.data[0] === undefined) {
          let cover = [];
          cover.push(res.data);
            
          return this.setState({ list1 : cover })
        }
        this.setState({ list1 : res.data });
        
      }
    
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
        
        
    }
    handlekey = (e) => {
        
        if(e.key === 'Enter'){
            this.onsel();
        }
    }
    render(){
        const value = this.value;
        const { list1 } = this.state;
        console.log(list1.length);
        return(
            <div className="rightside">
                <input value={value} onChange={this.handleChang} onKeyPress={this.handlekey}></input>
                <button onClick={this.onsel}> 검색</button>

                <h1>최신글</h1>
                {list1.length !== 0 ? list1.map( (el, key) => {
                        return(
                            <h2 key={key}>{el.title}</h2>
                        )
                  }) : (<h2>없습니다.</h2>) 
                }
            </div>
            
            
                    
                
            
        );
    }
    
}

export default leftside;