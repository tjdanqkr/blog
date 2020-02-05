import React, { Component } from 'react';
import axios from 'axios';

class update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updatelist: this.props.updatelist,
            title: "",
            content: "",
            category: "",
            idv: this.props.idv,
            list3: this.props.list3
        }
    }


    _updatego = async (e) => {
        const updatelist = this.state.updatelist;
        e.preventDefault();
        if(this.state.title==="undefined"){
            this.setState({title:updatelist[0].title})
        }
        if(this.state.category==="undefined"){
            this.setState({category:updatelist[0].category})
        }if(this.state.content==="undefined"){
            this.setState({content:updatelist[0].content})
        }
        const res = await axios('/update/data', {
            method: 'POST',
            data: {
                'id': this.state.idv,
                'title': this.state.title,
                'category': this.state.category,
                'content': this.state.content,
            },
            headers: new Headers()
        })

        window.location.reload();
    }


    render() {
        const updatelist = this.state.updatelist;
        const list3 = this.state.list3;
        
        return (
            <div className="update">

                <form onSubmit={this._updatego} method="post">
                    {updatelist.length !== 0 ? updatelist.map((el, key) => {

                        return (
                            <div>
                                <input value={this.state.title} onChange={(e) => { this.setState({ title: e.target.value }) }} placeholder={el.title} />
                                <input value={el.category}  placeholder={el.category} />
                                <input value={this.state.content} onChange={(e) => { this.setState({ content: e.target.value }) }} placeholder={el.content} />
                                <input type="submit" value="업데이트" ></input>

                            </div>

                        )
                    })
                        : null}
                    <select value={this.state.category} onChange={(e)=>{this.setState({category:e.target.value})}}>
                        <option>-----</option>
                        {(list3.length !== 0 ? list3.map((el, key) => {

                            return (
                                <option key={key} value={el.category}>{el.category}</option>
                            )
                        }) : <option>없습니다.</option>)}
                    </select>

                </form>
            </div>
        )
    }

}

export default update;