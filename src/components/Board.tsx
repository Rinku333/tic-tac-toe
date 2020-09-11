import React from 'react';
import cross from '../cross.svg';
import circle from '../circle.svg';
import './Board.css';

class Square extends React.Component {
    render() {
        return (
            <div className='item'>
                <img src={circle} className='marker' />
            </div>
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

