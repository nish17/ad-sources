import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import {SourceData} from './source-data-model';

const getImagePath = (name: string) : string => {
  return "./assets/images/"+name.toLowerCase().split(" ").join("-") + "-logo.png";
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345
    },
    media: {
      width: '14vw',
      height: '19vh',
      objectFit: 'cover',
      margin: '10%',
      paddingLeft: '15%',
    }
  })
);



const SourceCard:React.FC<{data: SourceData}> = ({data}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title={data.name} />
      <CardMedia className={classes.media} image={getImagePath(data.name)} />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon
            onClick={() => console.log("Favorite Icon Clicked!")}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default SourceCard;