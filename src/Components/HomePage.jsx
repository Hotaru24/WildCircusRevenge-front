import React from 'react';
import '../CSS/HomePage.css';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const images = [
  {
    url: `${process.env.PUBLIC_URL}/Pictures/homePage1.png`,
    title: 'Canon Shoot !',
    width: '30%',
  },
  {
    url: `${process.env.PUBLIC_URL}/Pictures/homePage2.png`,
    title: 'Sword Fight',
    width: '30%',
  },
  {
    url: `${process.env.PUBLIC_URL}/Pictures/homePage3.png`,
    title: 'Haunted House',
    width: '30%',
  },
];


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    justifyContent: "center",
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', 
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));



const HomePage = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);


  const handleSubmit = () => {
      setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div id="homeHeader" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/Pictures/banner.png)`}}>
        <h1>Wild Circus</h1>
      </div >
      <div id="homeBody">
        <section>
          <h2>Wellcome to the Wild Circus baby ! </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </section>
        <section>
          <h2>Come see our different shows !</h2>
          <div className={classes.root}>
            {images.map(image => (
              <ButtonBase
                focusRipple
                onClick={handleSubmit}
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width,
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`,
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
                <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                onClick={handleClose}
              >
                <Card className={classes.card} onClick={handleClose}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={image.url}
                      title="Lorem ipsum"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                      {image.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. 
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
             </Dialog>
              </ButtonBase>
            ))}

          </div>
        </section>
      </div>      
    </>
  );
}

export default HomePage;