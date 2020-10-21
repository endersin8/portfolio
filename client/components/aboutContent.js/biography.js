import React from 'react'
import Typography from '@material-ui/core/Typography'

const Biography = (props) => {
  const {className} = props
  return(
    <Typography className={className}>
      Hi there. I used to be a server and now I code.
    </Typography>
  )
}

export default Biography
