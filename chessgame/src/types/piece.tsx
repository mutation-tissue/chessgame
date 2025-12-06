import {linearMove,diagonalMove,forwardMove,forwardTwoStepsMove,kingMovement,knightMovement} from '../utils/pieceMovement';

interface PieceProps {
    pieceName: string|null,
    isFirstPlayerPiece: Boolean|null,
    pieceImage: string,
    position: {row: number,column: number}|null,
    moveRules:Function[],
    move: Function,
}

// 1st Player Pieces
const firstPlayerPawn: PieceProps = {
    pieceName: "pawn1",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: null,
    moveRules: [forwardMove,forwardTwoStepsMove],
    move: () => {},
};

const firstPlayerRook: PieceProps = {
    pieceName: "rook1",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: null,
    moveRules: [linearMove],
    move: () => {},
};

const firstPlayerKnight: PieceProps = {
    pieceName: "knight1",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: null,
    moveRules: [knightMovement],
    move: () => {},
};

const firstPlayerBishop: PieceProps = {
    pieceName: "bishop1",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: null,
    moveRules: [diagonalMove],
    move: () => {},
};

const firstPlayerQueen: PieceProps = {
    pieceName: "queen1",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: null,
    moveRules: [linearMove,diagonalMove],
    move: () => {},
};

const firstPlayerKing: PieceProps = {
    pieceName: "king1",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: null,
    moveRules: [kingMovement],
    move: () => {},
};

// 2nd Player Pieces
const secondPlayerPawn: PieceProps = {
    pieceName: "pawn2",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: null,
    moveRules: [forwardMove,forwardTwoStepsMove],
    move: () => {},
};

const secondPlayerRook: PieceProps = {
    pieceName: "rook2",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: null,
    moveRules: [linearMove],
    move: () => {},
};

const secondPlayerKnight: PieceProps = {
    pieceName: "knight2",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: null,
    moveRules: [knightMovement],
    move: () => {},
};

const secondPlayerBishop: PieceProps = {
    pieceName: "bishop2",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: null,
    moveRules: [diagonalMove],
    move: () => {},
};

const secondPlayerQueen: PieceProps = {
    pieceName: "queen2",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: null,
    moveRules: [linearMove,diagonalMove],
    move: () => {},
};

const secondPlayerKing: PieceProps = {
    pieceName: "king2",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: null,
    moveRules: [kingMovement],
    move: () => {},
};

const nonePiece: PieceProps = {
    pieceName: null,
    isFirstPlayerPiece: null,
    pieceImage: "",
    position: null,
    moveRules: [],
    move: () => {},
};
export type { PieceProps };

export {
    nonePiece,
    // 1st Player
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
};