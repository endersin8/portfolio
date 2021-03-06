import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles, useTheme} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
  container: {
    height: '30vh',
    perspective: '800px',
    [theme.breakpoints.down("xs")]: {
      height: '15vh',
    }
  },
  text: {
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    textTransform: "initial",
    borderRadius: ".5rem",
    fontWeight: "bold",
    fontSize: '40px',
    [theme.breakpoints.down("xs")]: {
      fontSize: '30px',
    }
  }
}))

const Introduction = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return(
    <div className={classes.container}>


      <div className="crawl">
        <Typography className={classes.text}>
          My name is Anderson Yoon.
        </Typography>
        <Typography className={classes.text}>
          From serving in restaurants to dreaming in code, my programming journey began on March 2020 with just a couple of youtube videos and free tutorials available online.
        </Typography>
        <Typography className={classes.text}>
          I fell in love with the concept of problem-solving and decided to take my newfound passion to the next level by applying to coding bootcamps, in order to learn even more at an accelerated pace.
        </Typography>
        <Typography className={classes.text}>
          Now, as a FullStack Academy graduate, I strive to learn about many different technologies and look forward to working together with other programmers to create websites and applications which are loved by many users.
        </Typography>
        <Typography className={classes.text}>
          I strongly believe that in order to create a masterpiece of a product, developers must value love for their work and compassion for the audience.
        </Typography>
      </div>
    </div>

  )
}

export default Introduction
