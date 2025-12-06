import './field.css';
import type {PieceProps} from '../types/piece';
import { useState } from 'react';



function Field({ field}: { field: PieceProps[][]}) {

    const [clickPosition,setClickPosition] = useState<{ row: number, column: number } | null>(null);
    const [movalePosition,setMovablePosition] = useState<{ row: number, column: number }[] | null>(null);
    const [isFirstPlayerTurn, setIsFirstPalyerTurn] = useState<boolean>(true);

    
    function movePiece(row:number,column:number){
        console.log(`move from ${clickPosition?.row} : ${clickPosition?.column} to ${row}:${column}`);
        [field[clickPosition!.row][clickPosition!.column], field[row][column]] = [field[row][column],field[clickPosition!.row][clickPosition!.column]]
    
        setClickPosition(null);
        setMovablePosition(null);
        setIsFirstPalyerTurn(!isFirstPlayerTurn)
    }

    function showMovableFiled(moveRules:Function[], row:number,column:number){
        const allresult:{row:number,column:number}[] = []

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
        <div className="row">
            {field.map((piecelist, row) => {
                return piecelist.map((piece,column) => {
                    const isclicked = clickPosition?.row === row && clickPosition?.column === column;
                    const isMovablePosition = movalePosition?.some(position => position.row === row && position.column === column) ?? false;
                    return <FieldButton 
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
    isclicked,
    isMovablePosition,
    row,
    column,
    pieceProps,
    onmovePiece,
    showselected,
    }:{
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
        onClick= {showclickedPlace}
        className={`button ${isclicked ? 'selected' : ''} ${isMovablePosition? 'Movable' : ''}`}>{pieceProps.pieceName}
        </button>
    )
}



export {Field};