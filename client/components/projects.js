import { CardActionArea, Typography, Button, Box } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import React, {useState} from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {projectArr} from './Content/projects'
import useMediaQuery from '@material-ui/core/useMediaQuery'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center'
  },
  projectBox: {
    width: '100%',
    borderColor: "#76ff03",
    borderWidth: "2px",
    margin: '2vh',
    display: 'flex',
    [theme.breakpoints.down("md")]: {
      flexDirection: 'column',
    },
    alignItems: 'center'
  },
  infoCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '2vh',
    alignItems: 'center'
  },

  projectTitle: {
    color: '#18ffff',
    textTransform: 'initial',
    textAlign: 'center',
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    fontWeight: 'bold',
    fontSize: '30px'
  },
  image: {
    width: '360px',
    [theme.breakpoints.down("xs")]: {
      width: '300px'
    },
    height: '400px',
    margin: '2vh',
    border: "2px solid #76ff03",
    borderRadius: 10,
    [theme.breakpoints.down("md")]: {
      flexDirection: 'column',
    }
  },
  role: {
    color: '#ff4081',
    fontWeight: 'bold'
  },
  desc: {
    fontWeight: 'bold'
  },
  stack: {
    fontWeight: 'bold',
    color: '#ff4081'
  },
  link: {
    fontWeight: 'bold',
    color: '#000000',
    background: "#18ffff",
    '&:hover': {
      background: '#76ff03'
    },
    width: 160,
    margin: '2vh'
  },
}))


const Projects = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  return(
    <div className={classes.root}>
      {projectArr.map((project)=>{
        return(
          <Box key={project.name} border={1} className={classes.projectBox}>
            <img alt={project.name} className={classes.image} src={project.image}/>
            <div className={classes.infoCont}>
              <Typography className={classes.projectTitle} >{project.name}</Typography>
              <Typography className={classes.role}>
                {project.roleDate}
              </Typography>
              <Typography className={classes.desc}>
                {project.desc}
              </Typography>
              <Typography className={classes.stack}>
                {project.stack}
              </Typography>
              <Button className={classes.link} onClick={()=>{window.open(project.projectUrl)}}>
                View Project
              </Button>
            </div>
          </Box>
        )
      })}
    </div>

  )
}

export default Projects
