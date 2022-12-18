import React from 'react';
import GamePlayerZone from './GamePlayerZone/GamePlayerZone';
import classes from './GameWindow.module.css';

//Component
function GameWindow(props) {
  
  return (
        <div className={classes.game_window}>
          <GamePlayerZone cells={props.fieldPlayer}
          key={"playerZone"}
          playerName={"Вы"}
          onClickCell={props.onClickCell}/>
          
          <GamePlayerZone cells={props.fieldEnemy}
          key={"enemyZone"}
          playerName={props.enemyName}
          onClickCell={props.onClickCell}
          onClickText={props.onClickText}/>
        </div>        
  );
}

export default GameWindow;