import React from 'react'
import Button from '@material-ui/core/Button';
import { PageContainer } from "./layout-components";
import { Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {HistoryProp} from './types';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  btn2: {
    color: 'green',
    borderColor: 'green',
    '&:hover': {
      borderColor: 'green',
    }
  }
})
);

const Homepage: React.FC<HistoryProp> = ({history}) => {
  const classes = useStyles();

  const btnClickHandler = () => {
    history.push('/select-source-page')
  }

  return (
    <PageContainer>
      <Typography variant="h2" gutterBottom>What would you like to do today?</Typography>
      <Typography variant="h5" gutterBottom>Welcome to Airboxr. Let's start with the task you want to accomplish today</Typography>
      <Button variant="outlined" color="secondary" onClick={btnClickHandler}>
        Import Data
      </Button><br />
      <Button variant="outlined" color="primary" className={classes.btn2} onClick={btnClickHandler}>
        Lookup Data
      </Button>
    </PageContainer>
  )
}

export default Homepage;