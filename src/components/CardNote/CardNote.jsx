import React, { Component } from 'react';
import { ReactComponent as IconDelete } from '../../assets/images/icons/icon-delete.svg';
import "./style.css";


class CardNote extends Component{

    _delete_card(){
        let index = this.props.indexCard
        this.props.deleteCardByApp(index);
    }

    render(){
        return(
            <section className={'card-nota' + ' ' + this.props.classProps}>
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.title}</h3>
                    <IconDelete onClick={this._delete_card.bind(this)} />
                    <h4>{this.props.category}</h4>
                </header>
                <p className="card-nota_texto">{this.props.textContent}</p>
            </section>
        );
    }
}

export default CardNote;
