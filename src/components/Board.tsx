import React from 'react';
import cross from '../cross.svg';
import circle from '../circle.svg';
import './Board.css';

export enum Marker {
    empty,
    X,
    O
}

function Square(props: {marker: Marker, onClick: () => void}) {
    let content: React.ReactElement<any,any> | null = null;
    if(props.marker === Marker.O) content = <img src={circle} className='marker' alt='circle'/>;
    else if(props.marker === Marker.X) content = <img src={cross} className='marker' alt='cross'/>;

    return (
        <button
            className='item'
            onClick={()=>props.onClick()}
        >
            {content}
        </button>
    )
}

export class Board extends React.Component<{markers: Marker[], handleClick:(i:number)=>void}> {
    renderSquare(i: number){
        return (
            <Square 
                marker={this.props.markers[i]}
                onClick={() => this.props.handleClick(i)}
            />
        );
    }

    render(){
        return (
            <div className='board'>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        )
    }
}
