import './field.css';
import type {PieceProps} from '../types/piece';
import { useState,useEffect } from 'react';
import {
    nonePiece,
    firstPlayerPawn,
    firstPlayerRook,
    firstPlayerKnight,
    firstPlayerBishop,
    firstPlayerQueen,
    firstPlayerKing,
    // 2nd Player
    secondPlayerPawn,
    secondPlayerRook,
    secondPlayerKnight,
    secondPlayerBishop,
    secondPlayerQueen,
    secondPlayerKing
  } from '../types/piece.tsx';


function Field() {

    const [field,setfield] = useState<PieceProps[][]>(()=>initializeField());
    const [clickPosition,setClickPosition] = useState<{ row: number, column: number } | null>(null);
    const [movalePosition,setMovablePosition] = useState<{ row: number, column: number }[] | null>(null);
    const [isFirstPlayerTurn, setIsFirstPalyerTurn] = useState<boolean>(true);

    
    function movePiece(row:number,column:number){
        console.log(`move from ${clickPosition?.row} : ${clickPosition?.column} to ${row}:${column}`);
        [field[clickPosition!.row][clickPosition!.column], field[row][column]] = [field[row][column],field[clickPosition!.row][clickPosition!.column]]
        
        const newfield = syncPosition(field);
        setfield(newfield);
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

function syncPosition(field:PieceProps[][]){
    field.map((piecelist,row) => {
      piecelist.map((piece,column) => {
        piece.position = {row:Math.floor(row),column:column};
        console.log(piece.position);
      });
    });
    return field;
}

function initializeField() {
    // 8x8の2次元配列を初期化（各行が独立した配列になるように）
    const field: (PieceProps)[][] = Array(8).fill(null).map(() => Array(8).fill(nonePiece));
    
    // 白の駒を配置 (row 0-1)
    // 1行目（バックランク）
    field[3][4] = firstPlayerRook;
    field[0][1] = firstPlayerKnight;
    field[0][2] = firstPlayerBishop;
    field[0][3] = firstPlayerQueen;
    field[0][4] = firstPlayerKing;
    field[0][5] = firstPlayerBishop;
    field[0][6] = firstPlayerKnight;
    field[0][7] = firstPlayerRook;
    
    // 2行目（ポーン）
    for (let i = 0; i < 8; i++) {
        field[1][i] = firstPlayerPawn;
    }

    // 黒の駒を配置 (row 6-7)
    // 8行目（バックランク）
    field[7][0] = secondPlayerRook;
    field[7][1] = secondPlayerKnight;
    field[7][2] = secondPlayerBishop;
    field[7][3] = secondPlayerQueen;
    field[7][4] = secondPlayerKing;
    field[7][5] = secondPlayerBishop;
    field[7][6] = secondPlayerKnight;
    field[7][7] = secondPlayerRook;
    
    // 7行目（ポーン）
    for (let i = 0; i < 8; i++) {
        field[6][i] = secondPlayerPawn;
    }

    return syncPosition(field);
}

export {Field,initializeField};