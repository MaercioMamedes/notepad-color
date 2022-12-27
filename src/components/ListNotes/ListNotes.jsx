import React, { Component } from 'react';
import CardNote from "../CardNote";
import "./style.css";


class ListNotes extends Component {
    render() {
        return (

            <ul className="lista-notas">
                {Array.of("Trabalho", "Trabalho", "Estudos").map((category, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNote />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListNotes;
