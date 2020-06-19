import React from 'react';
// import '../CSS/Navbar';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  navUI: {
    backgroundColor: "black"
  },
  navBody: {
    display: "flex",
    justifyContent: "space-between "
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    display: "flex",
    justifyContent: "flex-end",
    width: "80%",
    alignItems: "center"    
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white",
    marginLeft: "10px"
  },
}));


const Navbar = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navUI}>
        <Toolbar className={classes.navBody}>

          <Typography variant="h6" >
            <NavLink exact to="/" className={classes.title} activeClassName="main-nav-active" >
              Wild Circus  
            </NavLink> 
          </Typography>

          <div className={classes.link}>
            <Typography variant="h6" >
              <NavLink exact to="/progPage" className={classes.title} activeClassName="main-nav-active" >
                Programmation 
              </NavLink> 
            </Typography>
            <Typography variant="h6" > 
              <NavLink exact to="/info" className={classes.title} activeClassName="main-nav-active" >
                Infos Pratiques  
              </NavLink> 
            </Typography>        
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;