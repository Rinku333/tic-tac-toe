import React from 'react';
import {Board, Marker} from './Board';

export class Game extends React.Component<{},{markers: Marker[], turn: Marker}> {
    constructor(props: Readonly<{}>){
        super(props);
        this.state = {markers: new Array(9).fill(Marker.empty), turn: Marker.X};
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
        return(
            <div>
                <Board 
                    markers = {this.state.markers}
                    handleClick = {(i:number)=>this.handleClick(i)}
                />
            </div>
        )
    }
}