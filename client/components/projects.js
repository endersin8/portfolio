import { CardActionArea, Typography, Box } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {projectArr} from './Content/projects'
import useMediaQuery from '@material-ui/core/useMediaQuery'


const useStyles = makeStyles((theme) => ({
  carousel: {

  },
  root: {
    display: 'flex',
  },
  media: {
    height: 500,
    width: "40%"
  },
  details: {
    display: 'flex',
    flexDirection: "column",
  },
  content: {

  }
}))


const Projects = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  return(
    <Carousel className={classes.carousel} animation="slide" interval={8000} autoPlay={false}
    activeIndicatorProps={{style: {color:"#76ff03"}}}
    navButtonsAlwaysVisible={!isMobile}>
      {projectArr.map((project)=>{
        return(
            <Card key={project.name} className={classes.root}>
              <CardMedia
                className={classes.media}
                image={project.image}
                title="Project Image"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="h3" >{project.name}</Typography>
                  <Typography variant="subtitle2" >{project.roleDate}</Typography>
                  <Typography variant="body1" >{project.desc}</Typography>
                  <Typography variant="body2" >{project.stack}</Typography>
                  <Typography variant="button" >{project.projectUrl}</Typography>
                </CardContent>
              </div>
            </Card>
        )
      })}
    </Carousel>
  )
}

export default Projects
