import React, { Component } from 'react';
import { ReactComponent as IconDelete } from '../../assets/images/icons/icon-delete.svg';
import "./style.css";


class CardNote extends Component{

    _delete_card(){
        this.props.deleteCardByApp(this.props.indexCard);
    }

    render(){
        return(
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.title}</h3>
                    <IconDelete onClick={this._delete_card.bind(this)} />
                </header>
                <p className="card-nota_texto">{this.props.textContent}</p>
            </section>
        );
    }
}

export default CardNote;
