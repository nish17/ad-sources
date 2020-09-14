import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { SourceDataType} from './types';

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
  apiData: SourceDataType,
  isFav?: Boolean,
  clickedId: React.Dispatch<React.SetStateAction<number>>
}



const SourceCard: React.FC<Props> = ({ apiData, isFav, clickedId,  }) => {
  const classes = useStyles();

  const FavButtonHandler = (id: number) => {
    clickedId(id);
  }

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardHeader title={apiData.data.name} />
        <CardMedia className={classes.media} image={apiData.iconUrl} />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={() => FavButtonHandler(apiData.data.id)} >
            {isFav ? <FavoriteIcon/> : <FavoriteBorderIcon />}
          </IconButton>
        </CardActions>
      </Card>
      <br />
    </div>
  );
};

export default SourceCard;