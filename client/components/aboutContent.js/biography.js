import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(()=>({
  motto: {
    fontFamily: '"Comic Sans MS", "cursive", sans-serif',
    fontWeight: "bold"
  }
}))

const Biography = () => {
  const classes = useStyles()
  return(
    <div>
    <Typography variant="body1">
      Hi there! My name is Anderson Yoon. From serving in restaurants to dreaming in code, my programming journey began on March 2020 with just a couple of youtube videos and free tutorials available online. I fell in love with the concept of problem-solving and decided to take my newfound passion to the next level by applying to coding bootcamps, in order to learn even more at an accelerated pace. Now, as a FullStack Academy graduate, I strive to learn about many different technologies and look forward to working together with other programmers to create websites and applications which are loved by many users.
    </Typography>
    <Typography variant="body1" className={classes.motto}>
      In order to create a masterpiece of a product, developers must value love for their work and compassion for the audience.
    </Typography>
    </div>

  )
}

export default Biography
