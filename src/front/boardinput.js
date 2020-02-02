import React, { Component } from 'react';



class boardinput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            categoryadd: "",
            content: ""

        }
    }
    _settitle = (e) => {
        const { title } = e.target.value;
        this.setState({ title: title });
    }
    _setcontent = (e) => {
        const { content } = e.target.value;
        this.setState({ content: content });
    }
    _setcategory = (e) => {
        const { categoryadd } = e.target.value;
        this.setState({ categoryadd: categoryadd });
    }

    render() {
        const { title } = this.state.title;
        const { content } = this.state.content;
        const { categoryadd } = this.state.categoryadd;
        return (
            <div className="boardmain">
                <div className="boardinput">
                    <form>

                        <ul>
                            <li><h1>글 쓰기 </h1></li>
                            <li><input value={title} onChange={this._settitle} placeholder="title" /></li>
                            <li><select>
                                {(this.props.category.length !== 0 ? this.props.category.map((el, key) => {

                                    return (
                                        <option key={key}>{el.category}</option>
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
                    <form>
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