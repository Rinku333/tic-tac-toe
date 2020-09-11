import React from 'react';
import './Board.css';

class Square extends React.Component {
    render() {
        return (
            <div className='item'>a</div>
        )
    }
}

export class Board extends React.Component {

    render(){
        return (
            <div className='board'>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
            </div>
        )
    }
}

