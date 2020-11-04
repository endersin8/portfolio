import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button'
import {withRouter} from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  home: {
    backgroundColor: "#000000",
    color: "#76ff03",
    marginRight:20,
    '&:hover': {
      color: "#76ff03"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#76ff03",
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  button: {
    marginRight: 20,
    textTransform: "capitalize",
    fontWeight: "bold",
    background: "#000000"
  },
  fill: {
    height: 80
  },
  navBar: {
  },
  mItem: {
    fontWeight: "bold",
    backgroundColor: "#212121",
    '&:hover': {
      backgroundColor: "rgba(46.3, 100, 1.2)",
    }
  }
}));

const Navbar = (props) => {
  const {refClick} = props
  const {history} = props
  const theme = useTheme()
  const classes = useStyles(theme);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl)
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuClick = (ref) => {
    promiseTest().then(()=>{ref()})
  }

  const promiseTest = () => {
    return new Promise((resolve, reject) => {
      setAnchorEl(null)
      resolve()
    })
  }

  const handleButtonClick = (redirect) => {
    history.push(redirect)
  }

  const menuItems = [
    {
      menuTitle: 'About',
      refClick: refClick.aboutClick
    },
    {
      menuTitle: 'Projects',
      refClick: refClick.projectClick
    },
    {
      menuTitle: 'Skills',
      refClick: refClick.skillClick
    },
    {
      menuTitle: 'Contact',
      refClick: refClick.contactClick
    }
  ]

  const appBarItems = [
    {
      appBarTitle: 'About',
      refClick: refClick.aboutClick
    },
    {
      appBarTitle: 'Projects',
      refClick: refClick.projectClick
    },
    {
      appBarTitle: 'Skills',
      refClick: refClick.skillClick
    },{
      appBarTitle: 'Contact',
      refClick: refClick.contactClick
    },
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
                      return (
                        <MenuItem key={menuItem.menuTitle} className={classes.mItem} onClick={() => {handleMenuClick(menuItem.refClick)}}>{menuItem.menuTitle}</MenuItem>
                      )
                    })}
                  </Menu>
              </>)
            : (
              <div>
                <IconButton
                  onClick={()=>{handleButtonClick('/')}}
                  aria-label="home" className={classes.home} size="small">
                  <HomeIcon/>
                </IconButton>
                {appBarItems.map((aBI)=>{
                  return(
                    <Button key={aBI.appBarTitle} className={classes.button} onClick={()=>{aBI.refClick()}}>{aBI.appBarTitle}</Button>
                  )
                })}
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
