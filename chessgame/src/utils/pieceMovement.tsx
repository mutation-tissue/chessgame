import type {PieceProps} from '../types/piece';

function linearMove(field:PieceProps[][],row:number,column:number){
    const result:{row:number,column:number}[] = []


    try{
        for (let fieldRow = row+1; fieldRow<field.length; fieldRow++){
            if (field[fieldRow][column].pieceName === null){
                result.push({row: fieldRow,column: column});
            } else {
                break;
            }
        }
        for (let fieldRow = row-1; fieldRow>=0; fieldRow--){
            if (field[fieldRow][column].pieceName === null){
                result.push({row: fieldRow,column: column});
            } else {
                break;
            }
        }

        for (let fieldColumn = column+1; fieldColumn<field.length; fieldColumn++){
            if (field[row][fieldColumn].pieceName === null){
                result.push({row: row,column: fieldColumn});
            } else {
                break;
            }
        }
        for (let fieldColumn = column-1; fieldColumn>=0; fieldColumn--){
            if (field[row][fieldColumn].pieceName === null){
                result.push({row: row,column: fieldColumn});
            } else {
                break;
            }
        }
    } catch {
        console.log("out of range");
        return [];
    }

    return result;
}

function diagonalMove(field:PieceProps[][]){
    return [];
}

function forwardMove(field:PieceProps[][],row:number,column:number,isfirstPlayerTurn:boolean){
    const result:{row:number,column:number}[] = []

    const moveDirection = isfirstPlayerTurn? 1 :-1;

    console.log(isfirstPlayerTurn);
    try{
        if (field[row+moveDirection][column].pieceName === null){
            result.push({row: row+moveDirection,column: column});
            return result;
        } else {
            return [];
        }
    }catch{
        console.log("out of range");
        return [];
    }
}

function forwardTwoStepsMove(field:PieceProps[][],row:number,column:number,isfirstPlayerTurn:boolean){
    const result:{row:number,column:number}[] = []

    const moveDirection = isfirstPlayerTurn? 2 :-2;

    try{
        if (field[row+moveDirection][column].pieceName === null){
            result.push({row: row+moveDirection,column: column});
            return result;
        } else {
            return [];
        }
    }catch{
        console.log("out of range");
        return [];
    }
    
    
}
export {linearMove, diagonalMove,forwardMove,forwardTwoStepsMove}