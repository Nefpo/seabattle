import classes from './Cell.module.css';

function Cell(props) {

  let onClickCell = () => {
    props.onClickCell(props.position);
  }

  let cell;
 
  if (props.status === "hited") {
    cell = <div className={classes.cell + " " + classes.hited}></div>
  } else if (props.status === "missed")  {
    cell = <div className={classes.cell}>*</div>
  } else if (props.status === "ship") {
    cell = <div className={classes.cell + " " + classes.ship}></div>
  } else {
    cell = <div className={classes.cell}></div>
  }

  return (
    <div onClick={onClickCell}>
        {cell}
    </div>
  ); 
}

export default Cell;