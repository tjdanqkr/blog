import React, { Component } from 'react';
import myhe from '../img/header.jpg';
import './header.scss';
import axios from 'axios';
import Login from './login';
import Loginsusses from './loginsusses';
import Boardinput from './boardinput';
import Update from './update';


class header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      list1: [],
      list2: [],
      list3: [],
      selist: [],
      idv: '',
      mkbool: false,
      login : false,
      boardp: false,
      updatelist:[],
      title: "",
      categoryadd: "",
      content: "",
      category:""
    }

  }
  componentWillMount() {
    this._getData();
    this._getData1();
    this._getData2();

    this._getData4();
  }
  _getData = async () => {
    const res = await axios.get('/header/data');

    if (res.data[0] === undefined) {
      let cover = [];
      cover.push(res.data);

      return this.setState({ list: cover })
    }
    this.setState({ list: res.data });
  }
  handleChang = (e) => {
    const { value } = e.target;
    this.setState({
      value: value
    });

  }
  onsel = async () => {

    const value = this.state.value;
    console.log(value);

    const res = await axios('/sel/data', {
      method: "POST",
      data: { 'data': value },
      headers: new Headers()
    });

    if (res.data[0] === undefined) {
      let cover = [];
      cover.push(res.data);

      return this.setState({ list2: cover })
    }
    this.setState({ list2: res.data });

  }
  handlekey = (e) => {

    if (e.key === 'Enter') {
      this.onsel();
    }
  }

  _getData1 = async () => {
    const res = await axios.get('/new/data');

    if (res.data[0] === undefined) {
      let cover = [];
      cover.push(res.data);

      return this.setState({ list1: cover })
    }
    this.setState({ list1: res.data });

  }

  _getData2 = async () => {
    const res = await axios.get('/all/data');

    if (res.data[0] === undefined) {
      let cover = [];
      cover.push(res.data);

      return this.setState({ list2: cover })
    }
    this.setState({ list2: res.data });
  }
  _getData3 = async (e) => {
    const idv = this.state.idv;
    this.setState({ idv: e.target.value });
    const res = await axios('/se/data', {
      method: 'POST',
      data: { 'data': idv },
      headers: new Headers()
    })
    if (res.data) {
      if (res.data[0] === undefined) {
        let cover = [];
        cover.push(res.data);

        return this.setState({ list2: cover })
      }
      this.setState({ list2: res.data });

    }

  }
  _getData5 = async (e) => {
    const idv = this.state.idv;
    this.setState({ idv: e.target.value });
    const res = await axios('/categoryse/data', {
      method: 'POST',
      data: { 'data': idv },
      headers: new Headers()
    })
    if (res.data) {
      if (res.data[0] === undefined) {
        let cover = [];
        cover.push(res.data);

        return this.setState({ list2: cover })
      }
      this.setState({ list2: res.data });

    }

  }
  _getData4 = async () => {
    const res = await axios.get('/category/data');

    if (res.data[0] === undefined) {
      let cover = [];
      cover.push(res.data);

      return this.setState({ list3: cover })
    }
    this.setState({ list3: res.data });

  }
  mkgul = (e) =>{
    this.setState({ mkbool : true });
    if(this.state.mkbool===false){
      return 0;
    }
    
  }
  loact = (plag) =>{
    this.setState({ login:plag });
    
  }
  logout =(plag) =>{
    this.setState({login:plag});
  }
  boardpl =(plag) =>{
    this.setState({boardp:plag});
    
  }
  _delete= async(e) =>{
    const id = e.target.value;
    
    const res = await axios('/delete/data', {
      method: 'POST',
      data: { 'data':  id},
      headers: new Headers()
    })
  }
  _update= async(e) =>{
    e.preventDefault();
    this.setState({ idv: e.target.value });
    const res = await axios('/set/data', {
      method: 'POST',
      data: { 'data':  this.state.idv},
      headers: new Headers()
    })
    if (res.data[0] === undefined) {
      let cover = [];
      cover.push(res.data);

      return this.setState({ updatelist: cover })
    }
    console.log(res.data.length);
    this.setState({ updatelist: res.data });

  
  }

  render() {
    const { list } = this.state;
    const value = this.value;
    const { list2 } = this.state;
    const { list1 } = this.state;
    const { list3 } = this.state;
    const {mkbool} =this.state;
    const {login} =this.state;
    const {boardp}=this.state;
    const {updatelist}=this.state;
    const {idv} =this.state;
    return (
      <div>
        <div className="header">
          {list.length !== 0 ? list.map((el, key) => {

            return (
              <a href="/" key={key}><img src={el.png} alt="header img"  ></img> </a>
            )
          }) :

            <a href="/"><img src={myhe} alt="header img"></img> </a>
          }
        </div>
        <div className="body">
          <div className="rightside">
            <div className="select">
              <input value={value} onChange={this.handleChang} onKeyPress={this.handlekey}></input>
              <button onClick={this.onsel}> 검색</button>
            </div>
            <div className="new" >
              <h1>최신글</h1>
              <ul>
                {list1.length !== 0 ? list1.map((el, key) => {
                  return (
                    <li><button value={el.id} onClick={this._getData3} key={key}>{el.title}</button></li>
                  )
                }) : (<li>없습니다.</li>)
                }</ul>
            </div>
            <h1>카테고리</h1>
            <div className="category">
              <ul>
                {list3.length !== 0 ? list3.map((el, key) => {
                  return (
                    <li><button value={el.id} onClick={this._getData5}>{el.category}</button></li>
                  )
                }) : (<li>없습니다.</li>)
                }</ul>
            </div>
            <div className ="mk">
              {login? <Loginsusses logout={this.logout} boardpl={this.boardpl}></Loginsusses> :<button onClick={this.mkgul}>로그인</button>}
              
            </div>
          </div>
          <div className="main">
            {mkbool ? boardp? (<Boardinput category={list3}></Boardinput>):login?updatelist.length!==0? <Update updatelist={updatelist} idv={idv} list3={list3}></Update>
            :(list2.length !== 0 ? list2.map((el, key) => {
              
              return (
                <div className="gul" key={key}>
                  
                  <h1>{el.title}</h1><p>카테고리 : {el.category}</p><br></br>
                  <p>내용: {el.content} </p>
                  <p>시간: {el.atime}</p>
                  {login ? <div><button value={el.id} onClick={this._update}>수정</button> <button value={el.id} onClick={this._delete}>삭제</button></div>: null}
                  
                </div>
              )
            }): (<h2>없습니다.</h2>)) :(<Login loginac={this.loact}></Login>):
            (list2.length !== 0 ? list2.map((el, key) => {
              
              return (
                <div className="gul" key={key}>
                  <h1>{el.title}</h1><p>카테고리 : {el.category}</p><br></br>
                  <p>내용: {el.content} </p>
                  <p>시간: {el.atime}</p>
                </div>
              )
            }) : (<h2>없습니다.</h2>)
            )}

          </div>

        </div>

      </div>
    )
  }
}

export default header;
