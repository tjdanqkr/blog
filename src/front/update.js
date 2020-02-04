import React, { Component } from 'react';
import axios from 'axios';

class update extends Component{
    constructor(props) {
        super(props)
        this.state = {
          updatelist:this.props.updatelist,
          title: "",
          content: "",
          category:""
        }
    }
    
    
    _updatego = async (e) => {
        e.preventDefault();
        const res = await axios('/update/data', {
          method: 'POST',
          data: { 'id': this.state.id ,
                  'title': this.state.title,
                  'category': this.state.category,
                  'content': this.state.content,
                 },
          headers: new Headers()
        })
        if (res.data) {
          if (res.data[0] === undefined) {
            let cover = [];
            cover.push(res.data);
    
            return this.setState({ list2: cover })
          }
          this.setState({ list2: res.data });
          window.location.reload();
        }
    
    }
    render(){
        const updatelist = this.state;
        
        return(
            <div className= "update">
            {updatelist.length!==0 ? updatelist.map((el,key)=>{
            //.map((el, key) =>{
                this.setState({
                    title: el.title,
                    content: el.content,
                    category: el.category,
                })
                return(
                  <div><form onSubmit={this._updatego} method="post">
                    <input value={this.state.title} onChange={(e)=>{this.setState({title: e.target.value})}}/>
                    <input value={this.state.category} onChange={(e)=>{this.setState({category: e.target.value})}}/>
                    <input value={this.state.content} onChange={(e)=>{this.setState({content: e.target.value})}}/>
                    <input type="submit" value ="업데이트" ></input>
                    
                    </form></div>
                )
              })
              :null}</div>
        )
    }

}

export default update;