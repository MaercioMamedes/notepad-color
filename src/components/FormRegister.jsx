import React, { Component } from 'react';


class FormRegister extends Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="Título" />
                <textarea placeholder="Escreva sua nota" />
                <button> Criar Nota</button>
            </form>
        );
    }
}

export default FormRegister;