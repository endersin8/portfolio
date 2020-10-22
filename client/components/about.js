import React from 'react'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Typography, IconButton, Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core'
import EmojiEmotionsTwoToneIcon from '@material-ui/icons/EmojiEmotionsTwoTone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import {Biography, Work, Education, Skills, Interests, Contact} from './aboutContent.js'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  av: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  },
  smile: {
    background: "#ffd166",
    marginBottom: 10,
    marginTop: 5,
    '&:hover': {
      background: "#fca311"
    }
  },
  text: {
    fontWeight: "bold"
  },
  accContainer: {
    marginTop: 20,
    width: '95%'
  },
  accHeading: {
    background: "#ced7db"
  },
  accDetails: {
    background: "#fff"
  }
}))

const abouts = [
  {
    name: "Biography",
    component: Biography
  },
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
      <Typography className={classes.text}>Hello World!</Typography>
      <IconButton onClick={handleClick} className={classes.smile}>
        <EmojiEmotionsTwoToneIcon/>
      </IconButton>
      <Avatar alt="Anderson Yoon" className={classes.av} src={img ? "assets/60436966.png" : "assets/IMG_0698.jpeg"}/>
      <Box className={classes.accContainer}>
        {abouts.map((section)=>{
          return(
            <Accordion key={section.name}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
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
