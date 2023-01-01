import React, {Component} from 'react';
import "./style.css";


class ListCategories extends Component {
    /*Estrutura de Dados */

    constructor(){
        super();
        this.state = {
            categories:[]
        }
        
        this._newsCategories = this._newsCategoriesMethod.bind(this);
    }

    componentDidMount(){
        this.props.categories.subscribe(this._newsCategories);
    }

    componentWillUnmount(){
        this.props.categories.unsubscribe(this._newsCategories);
    }

    _newsCategoriesMethod(categories){
       
        this.setState({...this.state, categories});
        console.log(this.state.categories, 'rest')
    }

    _handleEventInput(event){
        if(event.key === "Enter"){
            let valueCategory = event.target.value;
            this.props.addCategoryByApp(valueCategory);
        }
    }


    /*Renderização */
    render() { 
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categories.map((category, index)=>{
                        return(
                            <li key={index}
                                className="lista-categorias_item">
                                    {category}
                            </li>
                        );
                    })}

                </ul>
            
            <input 
                type="text" 
                className="lista-categorias_input"
                placeholder="Adicionar categoria"
                onKeyUp={this._handleEventInput.bind(this)}
            />

            </section>
        )

        
    }
}
 
export default ListCategories;