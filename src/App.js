import React, { Component } from "react";
import ListNotes from "./components/ListNotes";
import FormRegister from "./components/FormRegister";
import "./assets/App.css";
import "./assets/index.css";


class App extends Component {
  render() {
    return (

      <div>
        <h1>Bloco de Notas</h1>
        <section className="conteudo">

          <FormRegister />
          <ListNotes />
        </section>
      </div>

    );
  }
}

export default App;
