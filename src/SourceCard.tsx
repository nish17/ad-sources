import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { DataSourceDto } from './types';

const getImagePath = (name: string): string => {
  return `${process.env.PUBLIC_URL}/images/${name.toLowerCase().split(" ").join("-")}-logo.png`;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345
    },
    media: {
      width: '110px',
      height: '100px',
      margin: '10%'
    }
  })
);


interface Props {
  data: DataSourceDto,
  favSource: number[],
  addFavSource: React.Dispatch<React.SetStateAction<number[]>>,
  isFav?: Boolean,
  clickedId: React.Dispatch<React.SetStateAction<number>>
}



const SourceCard: React.FC<Props> = ({ data, favSource, isFav, clickedId, addFavSource }) => {
  const classes = useStyles();

  const FavButtonHandler = (id: number) => {
    if (favSource.includes(id)) {
      const index = favSource.indexOf(id);
      favSource.splice(index, 1);
    }
    else {
      addFavSource([...favSource, id]);
    }
    clickedId(id);
  }

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardHeader title={data.name} />
        <CardMedia className={classes.media} image={getImagePath(data.name)} />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={() => FavButtonHandler(data.id)} >
            {isFav && <FavoriteBorderIcon />}
            {!isFav && <FavoriteIcon />}
          </IconButton>
        </CardActions>
      </Card>
      <br />
    </div>
  );
};

export default SourceCard;