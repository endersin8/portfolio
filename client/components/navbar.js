import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button'
import {withRouter} from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  button: {
    marginRight: 20,
    textTransform: "capitalize",
    background: "#fff",
    fontWeight: "bold"
  },
  fill: {
    height: 80
  },
  navBar: {
    background: "#ced7db"
  }
}));

const Navbar = (props) => {
  const {history} = props
  const theme = useTheme()
  const classes = useStyles(theme);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl)
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (redirect) => {
    history.push(redirect)
    setAnchorEl(null);
  };

  const handleButtonClick = (redirect) => {
    history.push(redirect)
  }

  const menuItems = [
    {
      menuTitle: 'About',
      redirect: '/'
    },
    {
      menuTitle: 'Projects',
      redirect: '/projects'
    }
  ]

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navBar}>
        <Toolbar>
            <div>
              {isMobile ? (
                <>
                <IconButton edge="start" onClick={handleMenu} className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    {menuItems.map(menuItem => {
                      const {menuTitle, redirect} = menuItem
                      return (
                        <MenuItem key={menuTitle} onClick={() => {handleMenuClick(redirect)}}>{menuTitle}</MenuItem>
                      )
                    })}
                  </Menu>
              </>)
            : (
              <div>
              <Button className={classes.button} variant="contained" onClick={()=>{handleButtonClick('/')}}>About</Button>
              <Button className={classes.button} variant="contained" onClick={()=>{handleButtonClick('/projects')}}>Projects</Button>
              </div>
            )}

            </div>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.fill}/>
    </div>
  );
}

export default withRouter(Navbar)
