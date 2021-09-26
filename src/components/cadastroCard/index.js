import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@mui/material/colors';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import UserImg from '../../images/user.png';
//import '../../styles/app.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: '8.5rem',
  },
  style:{
    fontFamily: '"Segoe UI"',
    minWidth: '13.5rem',
    minHeight: '2rem',
    borderRadius: '1rem',
    color: "whitesmoke",
    backgroundColor: "rgb(85, 85, 85)",
    '&:hover': {
        backgroundColor: red[700],
  },
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={UserImg}
          title="Cadastrar Cliente"
        />
      </CardActionArea>
      <CardActions>
        <Button className={classes.style}>
          Cadastro de Clientes
        </Button>
      </CardActions>
    </Card>
  );
}