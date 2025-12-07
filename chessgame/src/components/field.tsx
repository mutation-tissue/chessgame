import './field.css';
import type {PieceProps,PawnProps} from '../types/piece';
import { useState } from 'react';



function Field({ field,takePiece,isfinish,isFirstPlayerTurn}: { field: (PieceProps|PawnProps)[][],takePiece:Function,isfinish:boolean,isFirstPlayerTurn:boolean}) {

    const [clickPosition,setClickPosition] = useState<{ row: number, column: number } | null>(null);
    const [movalePosition,setMovablePosition] = useState<{ row: number, column: number }[] | null>(null);

    
    function movePiece(row:number,column:number){
        console.log(`move from ${clickPosition?.row} : ${clickPosition?.column} to ${row}:${column}`);

        //駒を動かす
        takePiece(field,row,column,clickPosition?.row,clickPosition?.column)
        
        setClickPosition(null);
        setMovablePosition(null);
    }

    function showMovableFiled(moveRules:Function[], row:number,column:number){
        const allresult:{row:number,column:number}[] = []

        console.log(moveRules);

        moveRules.forEach(moveRule => {
            const result = moveRule(field,row,column,isFirstPlayerTurn);
            allresult.push(...result);
        });

        setMovablePosition(allresult);

    }

    function showselected(row:number,column:number){
        if (isFirstPlayerTurn === field[row][column].isFirstPlayerPiece) {
            setClickPosition({row,column});
            showMovableFiled(field[row][column].moveRules,row,column);
        }
    }


    return (
        <div className="row field">
            {field.map((piecelist, row) => {
                return piecelist.map((piece,column) => {
                    const isclicked = clickPosition?.row === row && clickPosition?.column === column;
                    const isMovablePosition = movalePosition?.some(position => position.row === row && position.column === column) ?? false;
                    return <FieldButton 
                        isfinish = {isfinish}
                        isclicked={isclicked}
                        isMovablePosition={isMovablePosition}
                        key={(row+1)*(column+1)}
                        row={row}
                        column={column}
                        pieceProps={piece}
                        onmovePiece={()=>movePiece(row,column)}
                        showselected={()=>showselected(row,column)}
                    />
                });
            })}
        </div>
    )
}

function FieldButton({
    isfinish,
    isclicked,
    isMovablePosition,
    row,
    column,
    pieceProps,
    onmovePiece,
    showselected,
    }:{
        isfinish: boolean,
        isclicked: boolean,
        isMovablePosition: boolean,
        row:number,
        column:number,
        pieceProps:PieceProps,
        onmovePiece:(row:number,column:number) => void,
        showselected:(row:number,column:number)=>void,
    }){

    const showclickedPlace = () => {

        if (isMovablePosition){
            onmovePiece(row,column);
        } else {
            showselected(row,column);
        }
    }

    return (
        <button
        disabled = {isfinish}
        onClick= {showclickedPlace}
        className={`button ${isclicked ? 'selected' : ''} ${isMovablePosition? 'Movable' : ''}`}>
            {pieceProps.pieceImage !== null ?  <img src= {pieceProps.pieceImage!} alt="Button Image"></img> : null}
        </button>
    )
}

function GameResult({winner}:{winner:string}){
    return (
        <div className = "result">
            <p>this game winner : {winner}</p>
        </div>
    )
}


export {Field,GameResult};