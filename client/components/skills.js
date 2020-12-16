import React from 'react'
import {Paper, Typography, Box} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {skillsArr} from './Content/skills'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Avatar from '@material-ui/core/Avatar'
import FolderIcon from '@material-ui/icons/Folder'
import Typical from 'react-typical'


const useStyles = makeStyles((theme)=>({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  headerText: {
    fontWeight: "bold",
    color: '#18ffff'
  },
  headerCont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  divider: {
    backgroundColor: "#76ff03",
    height: "2px",
    width: '70%',
    margin: '4vh'
  },
  listContainer: {
    display:'flex',
    flexWrap:'wrap',
    justifyContent: 'center',
    width: "90%"
  },
  skillBox: {
    display: 'flex',
    alignItems: 'center',
    margin: '4vh'
  },
  textMod: {
    fontSize: '20px',
    [theme.breakpoints.down("xs")]: {
      fontSize: 16
    },
    fontWeight: 'bold',
    marginLeft: '1vh'
  },
  socialSkill: {
    fontWeight: 'bold',
    fontSize: '22px',
    [theme.breakpoints.down("xs")]: {
      fontSize: 18
    },
  }
}))

const Skills = () => {
  const theme=useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles(theme)
  const headerSize = isMobile ? 'h6' : 'h5'
  return(
    <Paper className={classes.root}>
      <Paper className={classes.headerCont}>
        <Typography variant={headerSize} className={classes.headerText}>I know how to work with...</Typography>
      </Paper>
      <Paper className={classes.listContainer}>
            {skillsArr.map((skill) => {
              return(
                <Box key={`${skill.name}1`} className={classes.skillBox}>

                      <Avatar alt={skill.name} src={skill.image}>
                        {skill.image ? '' : <FolderIcon />}
                      </Avatar>

                    <Typography className={classes.textMod}>{skill.name}</Typography>

                </Box>
              )
            })}
      </Paper>
      <div className={classes.divider}/>
        <Typical
          className={classes.socialSkill}
          loop={Infinity}
          steps={[
            "I am a Quick Learner",3000,
            "I am Open-Minded",3000,
            "I am a Hard Worker",3000,
            "I am an Active Listener",3000,
            "I am Compassionate",3000,
            "I am a Visualizer",3000,
          ]}
        />
    </Paper>
  )
}

export default Skills
