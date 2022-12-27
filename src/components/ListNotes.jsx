import React, {Component} from 'react';
import CardNote from "./CardNote";


class ListNotes extends Component{
    render(){
        return(
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudos").map((category)=>{
                    return(
                        <li>
                            <CardNote/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListNotes;
