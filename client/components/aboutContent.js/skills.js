import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(()=>({
  header: {
    fontWeight: "bold"
  }
}))

const Skills = () => {
  const classes = useStyles()
  return(
    <div>
      <Typography variant="h6" className={classes.header}>
        Technical Skills
      </Typography>
      <Typography variant="body1">
        JavaScript, Node.js, Express, React, Redux, Postgres, Sequelize, Git, HTML, CSS, Heroku, Material-UI, Phaser, Dialogflow, React-Native, Expo, and more to come!
      </Typography>
      <Typography variant="h6" className={classes.header}>
        Interpersonal Skills
      </Typography>
      <Typography variant="body1" >
        Quick Learner, Open Minded, Hard Worker, Active Listener, Flexible, Motivated, Patient, Compassionate, Visualizer
      </Typography>
    </div>
  )
}

export default Skills
