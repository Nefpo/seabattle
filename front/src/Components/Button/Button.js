import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Button.module.css';

function Button(props) {

  console.log(classes.button + " " + props.color)
  return (
        <React.Fragment>
            <button className={classes.button + " " + props.color}>Начать игру</button>
        </React.Fragment>
  );
}

export default Button;