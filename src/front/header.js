import React, { Component } from 'react';
import myhe from '../img/header.jpg';
import './header.scss';
import axios from 'axios';




class header extends Component{ 
    constructor(props) {
        super(props)
        this.state = {
          list : [],
          list1 : [],
          list2 :[],
          list3 :[],
          idv : ''
        }
       
      }
    componentWillMount() {
        this._getData();
        this._getData1();
        this._getData2();
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
    
    _getData1 = async () => {
        const res = await axios.get('/new/data');
        
        if(res.data[0] === undefined) {
          let cover = [];
          cover.push(res.data);
            
          return this.setState({ list1 : cover })
        }
        this.setState({ list1 : res.data });
        
      }

      _getData2 = async () => {
        const res = await axios.get('/all/data');
        
        if(res.data[0] === undefined) {
          let cover = [];
          cover.push(res.data);

          return this.setState({ list2 : cover })
        }
        this.setState({ list2 : res.data });
      }
      _getData3 = async(e) => {
        console.log(e.target.value)
        this.setState({ idv : e.target.value })
        console.log(1);
        const {idv} = this.state;
        
        
        e.preventDefault();
        console.log({idv});
        const res = await axios ('/se/data',{
            method:'POST',
            data : {'data':idv},
            headers: new Headers()
        })
        console.log({idv});
        if(res.data) {
            console.log({idv});
            alert('데이터를 추가했습니다.');
            return window.location.reload();
          }
        
        if(res.data[0] === undefined) {
          let cover = [];
          cover.push(res.data);

          return this.setState({ list3 : cover })
        }
        this.setState({ list3 : res.data });
        
      }
      
      
    render(){
        const { list } = this.state;
        const value = this.value;
        const { list2 } = this.state;
        const { list1 } = this.state;
        
        return(
            <div>
                <div className= "header">
                     {list.length !== 0 ? list.map( (el, key) => {
                        
                        return(  
                            <a href="/" key={key}><img src={el.png} alt="header img"  ></img> </a>
                        )
                    }) : 
                
                    <a href="/"><img src={myhe} alt="header img"></img> </a>
                    } 
                </div>
                <div className="rightside">
                    <input value={value} onChange={this.handleChang} onKeyPress={this.handlekey}></input>
                    <button onClick={this.onsel}> 검색</button>
                    <h1>최신글</h1>
                    {list1.length !== 0 ? list1.map( (el, key) => {
                        return(
                            <div className="new" key={key}>
                                <form method = 'POST' onSubmit={this._getData3} value={el.id}>
                                    <input type='hidden' value={el.id}></input>
                                    <input type="submit" value={el.title}></input><br></br> 
                                </form>
                            </div>
                        )
                    }) : (<h2>없습니다.</h2>) 
                 }
            </div>
            <div className="main">
                {list2.length !== 0 ? list2.map( (el, key) => {
                        
                        return(
                            <div className="gul" key={key}>
                                <h1>{el.title}</h1><p>카테고리 : {el.category}</p><br></br>
                                <p>내용: {el.content} </p>
                                <p>시간: {el.atime}</p>
                            </div>
                        )
                    }) : (<h2>없습니다.</h2>) 
                 }
                
            </div>
            <button onClick=''></button>
        </div>
        )
    }
}

export default header;
