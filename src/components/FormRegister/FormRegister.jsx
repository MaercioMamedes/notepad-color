import React, { Component } from 'react';
import "./style.css";

class FormRegister extends Component{
    /*EStruturas de dados */

    constructor(props){
        super(props);
        this.title = "";
        this.textContent = "";
        this.category = "sem categoria";
        this.state = {
            categories: []
        }

        this._newsCategories = this._newsCategoriesMethod.bind(this);
    }

    componentDidMount(){
        this.props.categories.subscribe(this._newsCategories);
    }

    componentWillUnmount(){
        this.props.categories.unsubscribe(this._newsCategories)
    }

    _newsCategoriesMethod(categories){
        console.log("atualizando categorias no form", categories)
        this.setState({...this.state, categories });
        console.log(this.state.categories,"array categoria do form")
    }

    _handleChangeCategory(event){
        event.stopPropagation();
        this.category = event.target.value;
    }

    _handleChangeTitle(event){
        event.stopPropagation();
        this.title = event.target.value;
    }

    _handleChangeTextContent(event){
        event.stopPropagation();
        this.textContent = event.target.value;
    }

    _createCard(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.createCardByApp(this.title, this.textContent, this.category);
        document.querySelector("#input-title").value = "";
        document.querySelector("#input-text").value = "";
        
    }


    /* renderização*/
    render(){
        return(
            <form 
                className="form-cadastro "
                onSubmit={this._createCard.bind(this)}>

                <select 
                    className="form-cadastro_input"
                    onChange={this._handleChangeCategory.bind(this)}
                >
                    <option>Sem categoria</option>

                    {this.state.categories.map((category, index)=>{
                        return <option key={index}>{category}</option>
                    })}

                </select>

                <input 
                    id="input-title"
                    type="text" 
                    placeholder="Título" 
                    className="form-cadastro_input"
                    onChange={this._handleChangeTitle.bind(this)}
                />
                <textarea 
                    id="input-text"
                    rows={15}
                    placeholder="Escreva sua nota"
                    className="form-cadastro_input"
                    onChange={this._handleChangeTextContent.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit"> 
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormRegister;
