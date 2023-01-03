import React, { Component } from 'react';
import "./style.css";

class FormRegister extends Component {
    /*EStruturas de dados */

    constructor(props) {
        super(props);
        this.title = "";
        this.textContent = false;
        this.important = false;
        this.urgent = "";
        this.category = "sem categoria";
        this.state = {
            categories: [],
            important:false,
            urgent:false,
            
        }

        this._newsCategories = this._newsCategoriesMethod.bind(this);
    }

    componentDidMount() {
        this.props.categories.subscribe(this._newsCategories);
    }

    componentWillUnmount() {
        this.props.categories.unsubscribe(this._newsCategories)
    }

    _newsCategoriesMethod(categories) {
        console.log("atualizando categorias no form", categories)
        this.setState({ ...this.state, categories });
        console.log(this.state.categories, "array categoria do form")
    }

    _handleChangeCategory(event) {
        event.stopPropagation();
        this.category = event.target.value;
    }

    _handleChangeTitle(event) {
        event.stopPropagation();
        this.title = event.target.value;
    }

    _handleChangeTextContent(event) {
        event.stopPropagation();
        this.textContent = event.target.value;
    }

    _handleChangeImportInput(event) {
        event.stopPropagation();
        let inputEvent = event.target.value;
        console.log("Recebi a mundança ImportantInput: ",inputEvent);
        let important = inputEvent === "true" ? true : false;

        console.log("O valor que vai para o estado é: ", important);

        console.log("o valor anterior do estado é: ", this.state.important);
        this.setState({...this.state, important});
        console.log("O novo estado é: ", this.state.important);
    }

    _handleChangeUrgentInput(event) {
        event.stopPropagation();
        
        let inputEvent = event.target.value;
        let urgent = inputEvent === "true" ? true : false;
        this.setState({...this.state, urgent});


    }

    _createCard(event) {
        event.preventDefault();
        event.stopPropagation();    
        this.props.createCardByApp(this.title, this.textContent, this.category, this.state.important, this.state.urgent);
        document.querySelector("#input-title").value = "";
        document.querySelector("#input-text").value = "";

    }


    /* renderização*/
    render() {
        return (
            <form
                className="form-cadastro "
                onSubmit={this._createCard.bind(this)}>

                <select
                    className="form-cadastro_input"
                    onChange={this._handleChangeCategory.bind(this)}
                >
                    <option>Sem categoria</option>

                    {this.state.categories.map((category, index) => {
                        return <option key={index}>{category}</option>
                    })}

                </select>

                <div className="classificacao-prioridade">
                    <div className="importante-input">

                        <input
                            type="radio"
                            name="important"
                            id="importante-true"
                            value='true'
                            onChange={this._handleChangeImportInput.bind(this)}

                        />
                        <label htmlFor="important-true">Importante</label>


                        <input
                            type="radio"
                            name="important"
                            id="importante-false"
                            value='false'
                            defaultChecked
                            onChange={this._handleChangeImportInput.bind(this)}

                        />
                        <label htmlFor="important-false"> Não Importante</label>

                    </div>

                    <div className="importante-input">
                        <label htmlFor="important-true">
                            <input
                                type="radio"
                                name="urgent"
                                id="urgene-true"
                                value='true'
                                onChange={this._handleChangeUrgentInput.bind(this)}

                            />

                            Urgente
                        </label>

                        <label htmlFor="important-false">
                            <input
                                type="radio"
                                name="urgent"
                                id="urgente-false"
                                value='false'
                                defaultChecked
                                onChange={this._handleChangeUrgentInput.bind(this)}

                            />
                            Não Urgente
                        </label>
                    </div>
                </div>

                <input
                    id="input-title"
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handleChangeTitle.bind(this)}
                />
                <textarea
                    id="input-text"
                    rows={15}
                    placeholder="Escreva sua nota"
                    className="form-cadastro_input"
                    onChange={this._handleChangeTextContent.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormRegister;
