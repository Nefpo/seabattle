import Button from '../Button/Button';
import classes from './StartWindow.module.css';

function StartWindow(props) {

  return (
    <div className={classes.game_window}>
      <div className={classes.online_game_button}>
        <Button color="blue"/>
      </div>
    </div>
  );
}

export default StartWindow;