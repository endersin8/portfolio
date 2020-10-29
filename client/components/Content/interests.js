import React from 'react'
import {Typography, Paper} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%'
  },
  gridList: {
    flexWrap: 'nowrap',
    width: '100%',
    transform: 'translateZ(0)'
  },
  gridTitle: {
    fontWeight: 'bold'
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
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  return(
    <Paper className={classes.root}>
      <GridList cellHeight={isMobile ? 300 : 400} className={classes.gridList} cols={isMobile ? .5 : 2.5}>
        {interestsArr.map((element)=>{
          return(
            <GridListTile key={element.name}>
              <img className={classes.media} src={element.image} alt={element.name} />
              <GridListTileBar
                title={element.name}
                className={classes.gridTitle}
              />
            </GridListTile>
          )
        })}
      </GridList>
    </Paper>
  )
}

export default Interests
