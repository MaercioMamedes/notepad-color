import React, { Component } from "react";
import ListNotes from "./components/ListNotes";
import FormRegister from "./components/FormRegister";
import "./assets/App.css";
import "./assets/index.css";


class App extends Component {
  /*Estrutura de Dados*/

  constructor(){
    super();

    this.state = {
      notes: []
    }
  }

  createCardByApp(title, textContent){
    const newNote = {title, textContent};
    const newArrayNotes = [...this.state.notes, newNote]
    const newState = {
      notes: newArrayNotes
    }

    this.setState(newState)
  }

  deleteCardByApp(indexCard){
    this.state.notes.splice(indexCard,1);
    this.setState(this.state.notes);
  }


  /*Renderização */
  render() {
    return (

      <div>
        <h1>Bloco de Notas</h1>
        <section className="conteudo">

          <FormRegister createCardByApp={this.createCardByApp.bind(this)}/>
          <ListNotes 
            deleteCardByApp={this.deleteCardByApp.bind(this)}
            notes={this.state.notes}/>
        </section>
      </div>

    );
  }
}

export default App;
