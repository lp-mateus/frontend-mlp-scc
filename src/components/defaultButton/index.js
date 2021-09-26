import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@mui/material/colors';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  style:{
    fontFamily: '"Segoe UI"',
    minWidth: '15rem',
    minHeight: '2rem',
    borderRadius: '1rem',
    color: "whitesmoke",
    backgroundColor: red[300],
    '&:hover': {
        backgroundColor: red[700],
  },
  },
});

export default function DefaultButton(props) {
  const classes = useStyles();

  return (
    
    <Button className={classes.style}>{props.name}</Button>

  );
}