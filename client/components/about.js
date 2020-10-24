import React from 'react'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Typography, IconButton, Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core'
import EmojiEmotionsTwoToneIcon from '@material-ui/icons/EmojiEmotionsTwoTone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import {Introduction, Work, Education, Skills, Interests, Contact} from './aboutContent.js'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center"
  },
  intro: {
    marginTop: 10,
    width: "90%",
    margin:20
  },
  hello: {
    ...theme.typography.button,
    background: "#000000",
    textTransform: "capitalize",
    borderRadius: "1rem",
    fontSize: 20,
    margin:20,
    padding: 8,
  },
  av: {
    margin:20,
    width: theme.spacing(25),
    height: theme.spacing(25)
  },
  smile: {
    background: "#ffeb3b",
    margin: 13,
    '&:hover': {
      background: "#76ff03"
    }
  },
  text: {
    ...theme.typography.button,
    background: "#000000",
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    textTransform: "capitalize",
    borderRadius: "1rem"
  },
  accContainer: {
    marginTop: 20,
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    },
    width: '90%'
  },
  accHeading: {
  },
  accDetails: {
  },
  expandMoreIcon: {
    color: "#76ff03",
    backgroundColor: "#000000"
  }
}))

const abouts = [
  {
    name: "Skills",
    component: Skills
  },
  {
    name: "Work Experience",
    component: Work
  },
  {
    name: "Education",
    component: Education
  },
  {
    name: "Interests",
    component: Interests
  },
  {
    name: "Contact",
    component: Contact
  }
]

const About= () => {
  const [img, changeImg] = React.useState(false)
  const theme = useTheme()
  const classes = useStyles(theme)
  const handleClick = () => {
    changeImg(!img)
  }
  return(
    <Box className={classes.root}>
      <Typography className={classes.hello}>Hello World!</Typography>
        <IconButton onClick={handleClick} className={classes.smile}>
          <EmojiEmotionsTwoToneIcon/>
        </IconButton>
          <Avatar alt="Anderson Yoon" className={classes.av} src={img ? "assets/60436966.png" : "assets/IMG_0698.jpeg"}/>
        <div className={classes.intro}>
          <Introduction/>
        </div>
      <Box className={classes.accContainer}>
        {abouts.map((section)=>{
          return(
            <Accordion key={section.name}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandMoreIcon}/>}
                className={classes.accHeading}
                >
                <Typography className={classes.text}>{section.name}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accDetails}>
                {<section.component/>}
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Box>
    </Box>
  )
}

export default About
