import React, {Component} from "react";
import ListNotes from "./components/ListNotes";
import FormRegister from "./components/FormRegister";


class App extends Component {
  render() {
    return (

      <section>
        <FormRegister />
        <ListNotes/>
      </section>

    );
  }
}

export default App;
