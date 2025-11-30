interface PieceProps {
    pieceName: string,
    isFirstPlayerPiece: Boolean,
    pieceImage: string,
    position: {row: number,column: number},
    moveRules:Function[],
    move: Function,
}

// 1st Player Pieces
const firstPlayerPawn: PieceProps = {
    pieceName: "pawn1",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: {row: 1, column: 0},
    moveRules: [],
    move: () => {},
};

const firstPlayerRook: PieceProps = {
    pieceName: "rook1",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: {row: 0, column: 0},
    moveRules: [],
    move: () => {},
};

const firstPlayerKnight: PieceProps = {
    pieceName: "knight1",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: {row: 0, column: 1},
    moveRules: [],
    move: () => {},
};

const firstPlayerBishop: PieceProps = {
    pieceName: "bishop1",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: {row: 0, column: 2},
    moveRules: [],
    move: () => {},
};

const firstPlayerQueen: PieceProps = {
    pieceName: "queen1",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: {row: 0, column: 3},
    moveRules: [],
    move: () => {},
};

const firstPlayerKing: PieceProps = {
    pieceName: "king1",
    isFirstPlayerPiece: true,
    pieceImage: "",
    position: {row: 0, column: 4},
    moveRules: [],
    move: () => {},
};

// 2nd Player Pieces
const secondPlayerPawn: PieceProps = {
    pieceName: "pawn2",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: {row: 6, column: 0},
    moveRules: [],
    move: () => {},
};

const secondPlayerRook: PieceProps = {
    pieceName: "rook2",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: {row: 7, column: 0},
    moveRules: [],
    move: () => {},
};

const secondPlayerKnight: PieceProps = {
    pieceName: "knight2",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: {row: 7, column: 1},
    moveRules: [],
    move: () => {},
};

const secondPlayerBishop: PieceProps = {
    pieceName: "bishop2",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: {row: 7, column: 2},
    moveRules: [],
    move: () => {},
};

const secondPlayerQueen: PieceProps = {
    pieceName: "queen2",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: {row: 7, column: 3},
    moveRules: [],
    move: () => {},
};

const secondPlayerKing: PieceProps = {
    pieceName: "king2",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: {row: 7, column: 4},
    moveRules: [],
    move: () => {},
};

const nonePiece: PieceProps = {
    pieceName: "none",
    isFirstPlayerPiece: false,
    pieceImage: "",
    position: {row: 0, column: 0},
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