import React from 'react';
import Board from 'Board';
import '../styles/index.css';
import '../styles/main.ff2bb229.css';

    
export default class Notes  extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div>
             <Board count={5} />
            </div>
            
        )
    }
}