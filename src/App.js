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


  /*Renderização */
  render() {
    return (

      <div>
        <h1>Bloco de Notas</h1>
        <section className="conteudo">

          <FormRegister createCardByApp={this.createCardByApp.bind(this)}/>
          <ListNotes notes={this.state.notes}/>
        </section>
      </div>

    );
  }
}

export default App;
