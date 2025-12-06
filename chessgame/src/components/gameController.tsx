import {Field} from './field.tsx';
import SideMenu from './sideMenu.tsx';
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
import {useState} from 'react'
import type {PieceProps} from '../types/piece'


function gameController() {
    
    const [field,setfield] = useState<PieceProps[][]>(()=>initializeField());


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

        field.map((piecelist,row) => {
        piecelist.map((piece,column) => {
            piece.position = {row:Math.floor(row),column:column};
            console.log(piece.position);
        });
        });

        console.log("initialize")
        return field
    }

    const handleInitialise = ()=>{
        const field = initializeField()
        setfield(field)
    }

    return(
        <div className = "gameController">
            <SideMenu 
                initialize  = {handleInitialise}
            />
            <Field
                field = {field}
            />
        </div>
    )
}




export default gameController;