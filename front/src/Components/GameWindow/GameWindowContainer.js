import { connect } from 'react-redux';
import GameWindow from './GameWindow';
import { clickCellActionCreator, clickTextActionCreator} from '../../redux/actionCreator';

debugger;
function mapStateToProps(state) {
  return {
    fieldPlayer: state.cellsPlayer,
    fieldEnemy: state.cellsEnemy,
    enemyName: state.enemyName
  }
}

function mapDispatchToProps(dispatch) {
  debugger;
  return { 
    onClickCell: (position) => { 
      dispatch(clickCellActionCreator(position))
    },
    onClickText: () => {
      dispatch(clickTextActionCreator())     
    }
  }
}

let GameWindowContainer = connect(mapStateToProps, mapDispatchToProps)(GameWindow);

export default GameWindowContainer;

