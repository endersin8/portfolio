import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'

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
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  link: {
    margin: 5,
    textTransform: "capitalize",
    fontWeight: "bold",
    color: "#76ff03",
    padding: "10px",
    borderRadius: "12px",
    textDecoration: "none",
    background: "#000000",
    '&:hover': {
      backgroundColor: "rgba(46.3, 100, 1.2, 0.4)"
    },
    [theme.breakpoints.down("xs")]: {
      padding: '5px'
    }
  },
  activeLink: {
    margin: 5,
    textTransform: "capitalize",
    fontWeight: "bold",
    color: "black",
    padding: "10px",
    borderRadius: "12px",
    textDecoration: "none",
    background: '#76ff03',
    [theme.breakpoints.down("xs")]: {
      padding: '5px'
    }
  },
  fill: {
    height: 80
  },
  navBar: {
    backgroundColor: "rgba(33,33,33,0.8)"
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems:"center"
  },
  holiday: {
    position: 'absolute',
    left: 25,
    color: "#76ff03"
  }
}));

const Navbar = (props) => {
  const theme = useTheme()
  const classes = useStyles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const currentRoute = location.pathname

  const appBarItems = [
    {
      appBarTitle: 'Home',
      url: '/'
    },
    {
      appBarTitle: 'About',
      url: '/about'
    },
    {
      appBarTitle: 'Projects',
      url: '/projects'
    },
    {
      appBarTitle: 'Skills',
      url: '/skills'
    },{
      appBarTitle: 'Contact',
      url: '/contact'
    }
  ]

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navBar}>
        <Toolbar>
              <div className={classes.btnContainer}>
                {isMobile ? undefined : <Typography className={classes.holiday}>Happy Holidays!</Typography>}
                {appBarItems.map((aBI)=>{
                  return(
                    <Link to={aBI.url} key={aBI.appBarTitle} className={currentRoute === aBI.url ? classes.activeLink : classes.link}>{aBI.appBarTitle}</Link>
                  )
                })}
              </div>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.fill}/>
    </div>
  );
}

export default Navbar
