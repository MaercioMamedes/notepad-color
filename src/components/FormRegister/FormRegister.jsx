import React, { Component } from 'react';
import "./style.css";

class FormRegister extends Component{
    /*EStruturas de dados */

    constructor(props){
        super(props);
        this.title = "";
        this.textContent = "";
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
        this.props.createCardByApp(this.title, this.textContent);
        document.querySelector("#input-title").value = "";
        document.querySelector("#input-text").value = "";
        
    }


    /* renderização*/
    render(){
        return(
            <form className="form-cadastro "
                onSubmit={this._createCard.bind(this)}>

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
