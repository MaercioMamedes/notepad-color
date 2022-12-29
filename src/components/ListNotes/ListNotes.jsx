import React, { Component } from 'react';
import CardNote from "../CardNote";
import "./style.css";


class ListNotes extends Component {
    render() {
        return (

            <ul className="lista-notas">
                {this.props.notes.map((note, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNote
                            indexCard={index} 
                            title={note.title} 
                            textContent={note.textContent}
                            deleteCardByApp={this.props.deleteCardByApp}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListNotes;
