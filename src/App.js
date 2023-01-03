import React, { Component } from "react";
import ListNotes from "./components/ListNotes";
import FormRegister from "./components/FormRegister";
import ListCategories from "./components/ListCategories";
import "./assets/App.css";
import "./assets/index.css";
import Categories from "./data/Categories";
import ArrayNotes from "./data/ArrayNotes"


/*a classe App é o principal componente do projeto, nela são instanciados
outros componentes do projeto */

class App extends Component {
  /*Estrutura de Dados*/

  constructor() {
    super();
    // Categories e ArrayNotes são classes helpers, que auxíliam no gerenciamento dos estados dos componentes que tem
    // esses objetos como atributos
    
    this.categories = new Categories();
    this.notes = new ArrayNotes();

  }

  /*Renderização */
  render() {
    return (

      <div>
        <h1 className="titulo-principal">Bloco de Notas</h1>
        <section className="conteudo">

          <FormRegister
            categories = {this.categories} 
            createCardByApp={this.notes.addNote.bind(this.notes)} />

          <main className="conteudo-principal">

            <ListCategories
              addCategoryByApp={this.categories.addCategory.bind(this.categories)}
              categories={this.categories}/>

            <ListNotes
              deleteCardByApp={this.notes.removeNote.bind(this.notes)}
              notes={this.notes} />

          </main>
          
        </section>
      </div>

    );
  }
}

export default App;
