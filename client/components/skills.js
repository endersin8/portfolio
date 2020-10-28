import React from 'react'
import {Paper, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {skillsArr} from './Content/skills'

const useStyles = makeStyles(()=>({
  header: {
    fontWeight: "bold"
  }
}))

const Skills = () => {
  const classes = useStyles()
  return(
    <Paper>
      <Typography variant="h6" className={classes.header}>
        Technical Skills
      </Typography>
      {skillsArr.map((skill) => {
        return(
          <Typography key={skill.name}>{skill.name}</Typography>
        )
      })}
      <Typography variant="h6" className={classes.header}>
        Interpersonal Skills
      </Typography>
      <Typography variant="body1" >
        Quick Learner, Open Minded, Hard Worker, Active Listener, Flexible, Motivated, Patient, Compassionate, Visualizer
      </Typography>
    </Paper>
  )
}

export default Skills
