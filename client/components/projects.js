import { CardActionArea, Typography, Button } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import React, {useState} from 'react'
import Carousel from 'react-material-ui-carousel'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {projectArr} from './Content/projects'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ReactCardFlip from 'react-card-flip'


const useStyles = makeStyles((theme) => ({
  carousel: {
    width: '90%'
  },
  flipText: {
    ...theme.typography.button,
    backgroundColor: 'rgb(0,0,0)',
    textTransform: 'initial',
    position: 'fixed',
    top: '53%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    borderRadius: "1rem",
    fontWeight: 'bold',
  },
  imageTitle: {
    ...theme.typography.button,
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    backgroundColor: 'rgb(0,0,0, 0.6)',
    color: '#18ffff',
    textTransform: 'initial',
    position: 'fixed',
    top: '3vh',
    width: '100%',
    textAlign: 'center',
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    fontWeight: 'bold',
    fontSize: '30px'
  },
  flipCont: {
    display: 'flex',
    width: '100%',
    flexDirection:'column',
    alignItems:'center'
  },
  cardContainer: {
    borderRadius: '1rem',
    height: '75vh',
    display:'flex',
    maxWidth: 700,
    flexDirection: 'column',
  },
  image: {
    marginTop: '3vh',
    borderRadius: '1rem'
  },
  cardContentContainer: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  name: {
    fontWeight: 'bold',
    color: '#18ffff'
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
    alignSelf: 'center'
  }
}))


const Projects = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const [flipStatus, useFlip] = useState(false)

  const handleFlip = () => {
    useFlip(!flipStatus)
  }

  return(
    <Carousel className={classes.carousel} animation="slide" interval={8000} autoPlay={false}
    next={()=>{flipStatus ? handleFlip() : ''}}
    prev={()=>{flipStatus ? handleFlip() : ''}}
    navButtonsAlwaysVisible={true}
    activeIndicatorProps={{style: {color:"#76ff03"}}}>
      {projectArr.map((project)=>{
        return(
          <div key={project.name} className={classes.flipCont}>
            <ReactCardFlip isFlipped={flipStatus}
            flipSpeedBackToFront={1}
            flipSpeedFrontToBack={1}>
            <Card className={classes.cardContainer}>
              <CardActionArea className={classes.image} onClick={()=>{handleFlip()}}>
              <CardMedia
                component="img"
                alt={project.name}
                image={project.image}
                title={project.name}
              />
              <Typography className={classes.flipText}>{isMobile ?
              'Click Me!' : 'Click to learn more!'}</Typography>
              <Typography className={classes.imageTitle}>{project.name}</Typography>
              </CardActionArea>
            </Card>
            <Card className={classes.cardContainer}>
              <CardActionArea onClick={()=>{handleFlip()}}>
                <CardContent className={classes.cardContentContainer}>
                  <Typography variant={isMobile? 'h4': 'h3'} className={classes.name} >{project.name}</Typography>
                  <Typography className={classes.role}>{project.roleDate}</Typography>
                  <Typography className={classes.desc}>{project.desc}</Typography>
                  <Typography className={classes.stack}>{project.stack}</Typography>
                </CardContent>
              </CardActionArea>
              <Button onClick={()=>{window.open(project.projectUrl)}}className={classes.link}>
                    View Project
                  </Button>
            </Card>
          </ReactCardFlip>
          </div>

        )
      })}
    </Carousel>
  )
}

export default Projects
