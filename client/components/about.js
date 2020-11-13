import React from 'react'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Typography, IconButton, Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core'
import EmojiEmotionsTwoToneIcon from '@material-ui/icons/EmojiEmotionsTwoTone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {Introduction, Work, Education, Interests} from './Content/index.js'
import Typical from 'react-typical'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    minHeight: '85vh'
  },
  intro: {
    marginTop: 10,
    width: "100%",
    height: '30vh',
    margin: '2vh',
    overflow:'hidden',
    [theme.breakpoints.down("xs")]: {
      height: '15vh',
    }
  },
  fade: {
    position:'relative',
    width: '100%',
    top: '-20%',
    height: '30vh',
    backgroundImage: 'linear-gradient(0deg, transparent, #000 75%)',
    [theme.breakpoints.down("xs")]: {
      height: '15vh'
    },
    zIndex: 1
  },
  hello: {
    borderRadius: "1rem",
    fontSize: 22,
    margin:'2vh',
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18
    }
  },
  av: {
    margin:'2vh',
    width: theme.spacing(25),
    height: theme.spacing(25)
  },
  smile: {
    background: "#ffeb3b",
    margin: '1.3vh',
    '&:hover': {
      background: "#76ff03"
    }
  },
  text: {
    ...theme.typography.button,
    backgroundColor: "#000000",
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    textTransform: "capitalize",
    borderRadius: "1rem",
    fontWeight: "bold"

  },
  accContainer: {
    marginTop: '2vh',
    width: '100%'
  },
  accHeading: {
    backgroundColor: "#212121"
  },
  accDetails: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  expandMoreIcon: {
    color: "#76ff03",
    backgroundColor: "#000000"
  }
}))

const abouts = [
  {
    name: "Work Experience",
    component: Work
  },
  {
    name: "Education",
    component: Education
  },
  // {
  //   name: "Interests",
  //   component: Interests
  // },
]

const About = (props) => {
  const [img, changeImg] = React.useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles(theme)
  const handleClick = () => {
    changeImg(!img)
  }
  return(
    <Box className={classes.root}>
        <Typical
          className={classes.hello}
          loop={1}
          wrapper='b'
          steps={[
            'Hello World!', 4000,
            'Welcome to my website!', 4000
          ]}
        />
        <IconButton onClick={handleClick} className={classes.smile}>
          <EmojiEmotionsTwoToneIcon/>
        </IconButton>
          <Avatar alt="Anderson Yoon" className={classes.av} src={img ? "assets/60436966.png" : "assets/IMG_0698.jpeg"}/>

        <div className={classes.intro}>
          <div className={classes.fade}></div>
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
