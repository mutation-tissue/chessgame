import './field.css';
import type {PieceProps} from '../types/piece';
import { useState } from 'react';

function initializeField(){
    console.log("initializeField");
  }

function Field({field,fieldRow}:{field:(PieceProps)[],fieldRow:number}) {

    const [clickPosition,setClickPosition] = useState<{ row: number, column: number } | null>(null);
    
    function movePiece(row:number,column:number){
        console.log(`move${row}:${column}`);        
    }

    function showselected(row:number,column:number){
        setClickPosition({row,column});
        console.log(`click ${row*column}`)
    }

    return (
        <div className="row">
            {field.map((piece, i) => {
                console.log(piece.position);
                console.log(clickPosition);
                const row = i % fieldRow;
                const column = Math.floor(i / fieldRow);
                return <FieldButton 
                clickPosition={clickPosition}
                key={i}
                row={row}
                column={column}
                pieceProps={piece}
                onmovePiece={()=>movePiece(row,column)}
                showselected={()=>showselected(row,column)}
                />;
            })}
        </div>
    )
}

function FieldButton({
    clickPosition,
    row,
    column,
    pieceProps,
    onmovePiece,
    showselected,
    }:{
        clickPosition: { row: number, column: number } | null,
        row:number,
        column:number,
        pieceProps:PieceProps,
        onmovePiece:(row:number,column:number) => void,
        showselected:(row:number,column:number)=>void,
    }){

    const showclickedPlace = ()=>{
        showselected(row,column);
        console.log(`clicked ${row} : ${column}`);
        //console.log(`${pieceProps.pieceName}`);
        console.log(`click : ${clickPosition?.column}:${pieceProps.position.column}`);
        onmovePiece(pieceProps.position.row,pieceProps.position.column);
    }

    return (
        <button
        onClick= {showclickedPlace}
        className={`button ${clickPosition?.column === pieceProps.position.column? 'selected' : ''}`}>{pieceProps.pieceName}
        </button>
    )
}

export {Field,initializeField};