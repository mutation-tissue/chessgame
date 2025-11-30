import './App.css'
import {Field} from './components/field.tsx'
import type {PieceProps} from './types/piece.tsx';
import {useState} from 'react';
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
  } from './types/piece.tsx';

function App() {
  
  const [field, setField] = useState(() => initializeField());
  const fieldRow=8;

  function initialize() {
      setField(initializeField());
      // 状態の確認は useEffect で行う
      // useEffect(() => { console.log(field) }, [field]);
  }

  return (
    <>
      <button onClick={initialize}>initialize</button>
      <Field field={field} fieldRow={fieldRow}/>
    </>
  )
}

//fieldの位置がうまく管理できていないここでは駒をセットした後に位置情報を更新する必要がある。
function initializeField(){
    const field:(PieceProps)[] = Array(64).fill(nonePiece);
    field[0] = firstPlayerRook;
    field[0].position.row = 0;
    field[0].position.column = 0;
    field[7] = firstPlayerRook;
    field[7].position.row = 0;
    field[7].position.column = 7;
    field[1] = firstPlayerKnight;
    field[6] = firstPlayerKnight;
    field[2] = firstPlayerBishop;
    field[5] = firstPlayerBishop;
    field[3] = firstPlayerQueen;
    field[4] = firstPlayerKing;
    field.fill(firstPlayerPawn,8,16); 

    field.fill(secondPlayerPawn,48,56); 
    field[63] = secondPlayerRook;
    field[63].position.row = 7;
    field[63].position.column = 0;
    field[62] = secondPlayerKnight;
    field[62].position.row = 7;
    field[62].position.column = 1;
    field[61] = secondPlayerBishop;
    field[61].position.row = 7;
    field[61].position.column = 2;
    field[60] = secondPlayerQueen;
    field[59] = secondPlayerKing;
    field[58] = secondPlayerBishop;
    field[57] = secondPlayerKnight;
    field[56] = secondPlayerRook;
    field[56].position.row = 7;
    field[56].position.column = 7;
    field[55] = secondPlayerKing;
    field[55].position.row = 7;
    field[55].position.column = 6;
    field[54] = secondPlayerBishop;
    field[54].position.row = 7;
    field[54].position.column = 5;
    return field;
}

export default App
