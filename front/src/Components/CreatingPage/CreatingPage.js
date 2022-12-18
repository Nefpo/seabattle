import classes from './CreatingPage.module.css';

function CreatingPage(props) {

  return (
    <div className={classes.game_window}>
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
    </div>
  );
}

export default CreatingPage;