import { Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#000000"
  }
}))

const Projects = () => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Typography variant="h1">
      Updating Soon!
      </Typography>
    </div>
  )
}

export default Projects
