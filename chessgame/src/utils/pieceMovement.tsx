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

function diagonalMove(field:PieceProps[][],row:number,column:number){
    const result:{row:number, column:number}[] = []

    try{
        //右下で移動できるマスがあるか確認
        for (let i = 1; row+i < field.length  && column+i < field[0].length; i++){
            if (field[row+i][column+i].pieceName === null){
                result.push({row: row+i,column: column+i});
            } else {
                break;
            }
        }

        //右上の移動
        for (let i = 1; 0 <= row-i  && column+i < field[0].length; i++){
            if (field[row-i][column+i].pieceName === null){
                result.push({row: row-i,column: column+i});
            } else {
                break;
            }
        }

        //左下の移動
        for (let i = 1; row+i < field.length  && 0 <= column-i; i++){
            if (field[row+i][column-i].pieceName === null){
                result.push({row: row+i,column: column-i});
            } else {
                break;
            }
        }
        //左上の移動
        for (let i = 1; 0 <= row-i  && 0 <= column-i; i++){
            if (field[row-i][column-i].pieceName === null){
                result.push({row: row-i,column: column-i});
            } else {
                break;
            }
        }
        
    } catch {
        console.log(`row ${row} column ${column}`)
        console.log("out of range");
        return [];
    }

    return result;
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