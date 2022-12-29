import React, { Component } from "react";
import ListNotes from "./components/ListNotes";
import FormRegister from "./components/FormRegister";
import ListCategories from "./components/ListCategories";
import "./assets/App.css";
import "./assets/index.css";


class App extends Component {
  /*Estrutura de Dados*/

  constructor() {
    super();

    this.state = {
      notes: [],
      categories: []
    }
  }

  createCardByApp(title, textContent) {
    const newNote = { title, textContent };
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newArrayNotes,
    }

    this.setState(newState)
  }

  deleteCardByApp(indexCard) {
    this.state.notes.splice(indexCard, 1);
    this.setState(this.state.notes);
  }

  addCategoryByApp(category) {
    const newCategory = category;
    const newArrayCategories = [...this.state.categories, newCategory];
    const newState = { ...this.state, categories: newArrayCategories };

    this.setState(newState);
  }


  /*Renderização */
  render() {
    return (

      <div>
        <h1>Bloco de Notas</h1>
        <section className="conteudo">

          <FormRegister createCardByApp={this.createCardByApp.bind(this)} />

          <main className="conteudo-principal">

            <ListCategories
              addCategoryByApp={this.addCategoryByApp.bind(this)}
              categories={this.state.categories}/>

            <ListNotes
              deleteCardByApp={this.deleteCardByApp.bind(this)}
              notes={this.state.notes} />

          </main>
          
        </section>
      </div>

    );
  }
}

export default App;
