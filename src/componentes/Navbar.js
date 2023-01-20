import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCart';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import logo from './images/logo-zapa.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(50),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} alt="Logo" height="100" width="100" />
          </IconButton>
          <Button color="inherit" href="/">Inicio</Button>
          <Button color="inherit" href="/">Productos</Button>
          <Button color="inherit" href="/">Hombre</Button>
          <Button color="inherit" href="/">Mujer</Button>
          <Button color="inherit" href="/">Niño</Button>
          <IconButton color="inherit" aria-label="carrito"></IconButton>
            <ShoppingCartOutlined/>
            <IconButton  color="inherit" aria-label="buscar"> </IconButton>
            <SearchOutlinedIcon fontSize="large" />
            <IconButton color="inherit" aria-label="ingresar"></IconButton>
            <AccountCircleOutlinedIcon/>

          
         
        
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar
