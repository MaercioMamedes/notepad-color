import React, { Component } from 'react';
import CardNote from "../CardNote";
import "./style.css";


class ListNotes extends Component {

    constructor(){
        super();
        this.state = {
            notes:[]
        }

        this._newsNotes = this._newsNotesMethod.bind(this);
    }

    componentDidMount(){
        this.props.notes.subscribe(this._newsNotes);
    }

    componentWillUnmount(){
        this.props.notes.unsubscribe(this._newsNotes);
    }

    _newsNotesMethod(notes){
        this.setState({...this.state,notes});
    }

    render() {
        return (

            <ul className="lista-notas">
                {this.state.notes.map((note, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNote
                            classProps = {note.getClassName()}
                            indexCard={index} 
                            title={note.title} 
                            textContent={note.textContent}
                            category = {note.category}
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
