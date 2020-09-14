import React from 'react';
import cross from '../cross.svg';
import circle from '../circle.svg';
import './Board.css';

enum Marker {
    empty,
    X,
    O
}

function Square(props: {marker: Marker, onClick: () => void}) {
    let content: React.ReactElement<any,any> | null = null;
    if(props.marker === Marker.O) content = <img src={circle} className='marker' />;
    else if(props.marker === Marker.X) content = <img src={cross} className='marker' />;

    return (
        <button
            className='item'
            onClick={()=>props.onClick()}
        >
            {content}
        </button>
    )
}

export class Board extends React.Component<{},{markers: Marker[], turn: Marker}> {
    constructor(props: Readonly<{}>){
        super(props);
        this.state = {markers: new Array(9).fill(Marker.empty), turn: Marker.X};
    }

    renderSquare(i: number){
        return (
            <Square 
                marker={this.state.markers[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    handleClick(i:number): void{
        if(this.state.markers[i] === Marker.empty){
            let m = this.state.markers.slice();
            m[i] = this.state.turn;
    
            let t = this.state.turn === Marker.X ? Marker.O : Marker.X;
    
            this.setState({markers:m, turn:t});
        }
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

