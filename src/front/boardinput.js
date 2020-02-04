import React, { Component } from 'react';
import axios from 'axios';


class boardinput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            categoryadd: "",
            content: "",
            category:""
        }
    }
    _categorychange =(e) =>{
        this.setState({ category: e.target.value });
    }
    _settitle = (e) => {
        this.setState({ title: e.target.value });
    }
    _setcontent = (e) => {
        this.setState({ content: e.target.value });
    }
    _setcategory = (e) => {
        this.setState({ categoryadd: e.target.value});
    }
    _insertcategory = async(e) =>{
        e.preventDefault();
        const { categoryadd } = this.state;
        const res = await axios('/categoryin/data', {
            method: 'POST',
            data: { 'data': categoryadd},
            
            headers: new Headers()
          })
        window.location.reload();
        
      
    }
    _inserttitle = async(e) =>{
        e.preventDefault();
        const { title } = this.state;
        const {content} = this.state;
        const {category} = this.state;
        const res = await axios('/boardin/data', {
            method: 'POST',
            data: { 'title': title,
                    'content': content,
                    'category': category    
            },
            
            headers: new Headers()
          })
        window.location.reload();
        
      
    }

    render() {
        const { title } = this.state.title;
        const { content } = this.state.content;
        const { categoryadd } = this.state.categoryadd;
        
        return (
            <div className="boardmain">
                <div className="boardinput">
                    <form onSubmit={this._inserttitle} method="post">

                        <ul>
                            <li><h1>글 쓰기 </h1></li>
                            <li><input value={title} onChange={this._settitle} placeholder="title" /></li>
                            <li><select value={this.state.category} onChange={this._categorychange}>
                                <option>-----</option>
                                {(this.props.category.length !== 0 ? this.props.category.map((el, key) => {

                                    return (
                                        <option key={key} value={el.category}>{el.category}</option>
                                    )
                                }) : <option>없습니다.</option>)}
                            </select></li>
                            {//<li><input value={content} onChange={this._setcontent}/></li>
                            }
                            <li><textarea placeholder="Input some text." value={content} onChange={this._setcontent}></textarea></li>
                            <input type="submit" value="글 게시" />
                        </ul>
                    </form>
                </div>
                <div className="incate">
                    <form onSubmit={this._insertcategory} method="post">
                        <ul>
                            <li><h1>카테고리 추가 </h1></li>
                            <li><input placeholder="카테고리 이름" value={categoryadd} onChange={this._setcategory}></input>     </li>
                            <li><input type="submit" value="카테고리추가 "></input></li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}
export default boardinput;