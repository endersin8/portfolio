import { CardActionArea, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#000000"
  },
  media: {
    height: 400,
  },
}))

const Projects = () => {
  const projArr = [
    {
      name: "ScoobyAsso",
      picture: "/assets/60436966.png",
      desc: "My first project, Fullstack implementation of an e-commerce website"
    },
    {
      name: "FoxDodge",
      picture: "/assets/basac.jpg",
      desc: "Second Proj, a game"
    }
  ]
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Carousel>
        {projArr.map((proj) => {
          return(
            <Card vairant="outlined" key={proj.name}>
              <CardActionArea>
                <CardMedia image={proj.picture} title={proj.name} className={classes.media}/>
                <CardContent>
                  <Typography>
                    {proj.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Projects
