import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from 'react-router-dom';

import { SourceDataType, clickParams, HistoryProp } from '../../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      width: '110px',
      height: '100px',
      margin: '10%'
    }
  })
);


interface Props extends HistoryProp {
  apiData: SourceDataType,
  isFav?: Boolean,
  clickedParams: React.Dispatch<React.SetStateAction<clickParams>>
}

const SourceCard: React.FC<Props> = ({ apiData, isFav, clickedParams, history }) => {
  const classes = useStyles();

  const FavButtonHandler = (id: number, fav: boolean, name: string) => {
    clickedParams({ id, fav });
    history.push(`/select-table/${name.toLowerCase().split(' ').join('-')}`)
  }

  return (
    <div>
      <Link to={`/select-table/${apiData.data.name.toLowerCase().split(' ').join('-')}`} >
        <Card variant="outlined">
          <CardHeader title={apiData.data.name} />
          <CardMedia className={classes.media} image={apiData.iconUrl} />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={() => FavButtonHandler(apiData.data.id, !apiData.isMarked, apiData.data.name)} >
              {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </CardActions>
        </Card>
      <br />
      </Link>
    </div>
  );
};

export default SourceCard;