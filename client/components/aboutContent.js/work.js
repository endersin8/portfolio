import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  wrapper: {
    display:"flex",
    justifyContent:"space-evenly",
    width: "100%",
    flexWrap:"wrap"
  },
  header:{
    fontWeight: "bold"
  },
  root: {
    [theme.breakpoints.down("xs")]: {
      minWidth: 320,
      maxWidth:320,
    },
    margin:"1rem",
    minWidth:345,
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const jobs = [
  {
    name: "Currently Unavailable",
    picture: "/assets/port3.png",
    title: "Software Engineer",
    desc: "Description",
  },
  {
    name: "Sik Gaek",
    picture: "/assets/port3.png",
    title: "Server (November 2019 - March 2020)",
    desc: "Server (November 2019 - March 2020)",
  },
  {
    name: "BonChon Chicken",
    picture: "/assets/port3.png",
    title: "Server/Bartender (August 2018 - November 2019)",
    desc: "Description",
  },
  {
    name: "The Basac",
    picture: "/assets/port3.png",
    title: "Server (May 2018 - July 2019)",
    desc: "Description",
  }
]

const Work = (props) => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return(
    <div className={classes.wrapper}>
      {jobs.map((job)=> {
        return(
          <Card key={job.name} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={job.picture}
                title={job.name}
              />
              <CardContent>
                <Typography className={classes.header} gutterBottom variant="h6" component="h6">
                  {job.name}
                </Typography>
                <Typography variant="h6" component="h6">
                  {job.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {job.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })}
    </div>
  )
}

export default Work
