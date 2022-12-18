import {createStore} from 'redux'
import { CLICK_CELL, CLICK_TEXT } from './actionCreator'

const initialState = {
   cellsPlayer: [["", "", "", "", "", "", "", "", "", ""],
   ["", "", "", "", "", "", "", "", "ship", ""],
   ["hited", "", "", "", "", "", "", "", "", ""],
   ["hited", "", "", "", "", "missed", "", "", "", ""],
   ["", "", "", "", "", "", "", "", "", ""],
   ["", "", "ship", "ship", "ship", "", "", "", "", ""],
   ["", "", "", "", "", "", "", "", "", ""],
   ["", "", "", "", "", "", "", "", "", ""],
   ["", "", "missed", "", "", "", "", "", "", ""],
   ["", "", "", "", "", "", "", "", "", ""]],

   cellsEnemy: [["", "", "", "", "", "", "", "", "", ""],
   ["", "", "", "", "", "", "", "", "ship", ""],
   ["hited", "", "", "", "", "", "", "", "", ""],
   ["hited", "", "", "", "", "missed", "missed", "missed", "missed", ""],
   ["", "", "", "", "", "", "", "", "", ""],
   ["", "", "ship", "ship", "ship", "ship", "", "", "", ""],
   ["", "", "", "", "", "", "", "", "", ""],
   ["", "", "", "", "", "", "", "", "", ""],
   ["", "", "missed", "", "", "", "", "", "", ""],
   ["", "", "", "", "", "", "", "", "", ""]],

   playerName : "FalconBone",
   enemyName: "Sashechka"
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case CLICK_CELL:
         {
            let stateCopy = { ...state };
            stateCopy.cellsEnemy = state.cellsEnemy.slice();
            stateCopy.cellsEnemy[action.position.x][action.position.y] = "missed";
            console.log(action.position.x + " " + action.position.y);
            console.log(state.cellsEnemy === stateCopy.cellsEnemy);
            debugger;
            return {...stateCopy};
         }
      case CLICK_TEXT:
         {
            let stateCopy = { ...state };
            stateCopy.enemyName = "NOVOE IMYA YA NAJAL";
            return {...stateCopy};
         }
      default:
         return state;
   }
}

const store = createStore(reducer);

export default store;