import {linearMove,diagonalMove,forwardMove,kingMovement,knightMovement} from '../utils/pieceMovement';

interface PieceProps {
    pieceName: string|null,
    isFirstPlayerPiece: Boolean|null,
    pieceImage: string,
    position: {row: number,column: number}|null,
    moveRules:Function[],
    move: Function,
}

interface PawnProps extends PieceProps{
    ismove: boolean
}

// 1st Player Pieces
const firstPlayerPawn: PawnProps = {
    pieceName: "pawn",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: null,
    moveRules: [forwardMove],
    move: () => {},
    ismove: false
};

const firstPlayerRook: PieceProps = {
    pieceName: "rook",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: null,
    moveRules: [linearMove],
    move: () => {},
};

const firstPlayerKnight: PieceProps = {
    pieceName: "knight",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: null,
    moveRules: [knightMovement],
    move: () => {},
};

const firstPlayerBishop: PieceProps = {
    pieceName: "bishop",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: null,
    moveRules: [diagonalMove],
    move: () => {},
};

const firstPlayerQueen: PieceProps = {
    pieceName: "queen",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: null,
    moveRules: [linearMove,diagonalMove],
    move: () => {},
};

const firstPlayerKing: PieceProps = {
    pieceName: "king",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: null,
    moveRules: [kingMovement],
    move: () => {},
};

// 2nd Player Pieces
const secondPlayerPawn: PawnProps = {
    pieceName: "pawn",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: null,
    moveRules: [forwardMove],
    move: () => {},
    ismove: false,
};

const secondPlayerRook: PieceProps = {
    pieceName: "rook",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: null,
    moveRules: [linearMove],
    move: () => {},
};

const secondPlayerKnight: PieceProps = {
    pieceName: "knight",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: null,
    moveRules: [knightMovement],
    move: () => {},
};

const secondPlayerBishop: PieceProps = {
    pieceName: "bishop",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: null,
    moveRules: [diagonalMove],
    move: () => {},
};

const secondPlayerQueen: PieceProps = {
    pieceName: "queen",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: null,
    moveRules: [linearMove,diagonalMove],
    move: () => {},
};

const secondPlayerKing: PieceProps = {
    pieceName: "king",
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
export type { PieceProps,PawnProps };

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