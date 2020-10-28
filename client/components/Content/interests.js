import React from 'react'
import {Typography, Paper} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)'
  }
}))

const interestsArr = [
  {
    name: 'Go',
    image: 'assets/interests/baduk.jpeg'
  },
  {
    name: 'Fitness',
    image: 'assets/interests/fitness.jpeg'
  },
  {
    name: 'Bowling',
    image: 'assets/interests/bowling.jpg'
  },
  {
    name: 'Music',
    image: 'assets/interests/music.jpeg'
  }
]

const Interests = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return(
    <Paper className={classes.root}>
      <GridList className={classes.gridList} cols={2}>
        {interestsArr.map((element)=>{
          return(
            <GridListTile key={element.name}>
              <img className={classes.media} src={element.image} alt={element.name} />
              <GridListTileBar
                title={element.name}
              />
            </GridListTile>
          )
        })}
      </GridList>
    </Paper>
  )
}

export default Interests
