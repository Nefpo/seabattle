import React from 'react';
import Cell from './Cell/Cell';
import classes from './GamePlayerZone.module.css';

function GamePlayerZone(props) {

  let onClickText = () => {
    props.onClickText();
  }
 
  return (
        <div className={classes.game_field_area}>
          <div className={classes.player_name_text} onClick={onClickText}>
            {props.playerName}
          </div>

          <div className={classes.cells_field}>
            {props.cells.map((row, index) => (
              <React.Fragment key={index}>
                {row.map((cell, cellIndex) => (
                  <Cell status={cell}
                        onClickCell={props.onClickCell}
                        position={{x: index, y: cellIndex}}
                        key={index*10 + cellIndex}/>                        
                ))}
              </React.Fragment>
            ))}
          </div>
          <div>
            Время
          </div>
        </div>
  );
}


export default GamePlayerZone;