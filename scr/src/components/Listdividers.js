import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListDividers() {
  const classes = useStyles();

const onClickAsesoria = ()=>{
    console.log("active link acesoria");
};

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Impuestos Personas Naturales" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Impuestos Empresas" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Acesorias Especializadas" 
        onClick ={onClickAsesoria}/>
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Asecores Contables" />
      </ListItem>
    </List>
  );
}