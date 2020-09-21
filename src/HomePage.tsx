import React from 'react'
import Button from '@material-ui/core/Button';
import { PageContainer } from "./layout-components";
import { Typography } from '@material-ui/core';
import { HistoryProp } from './types';



const Homepage: React.FC<HistoryProp> = ({ history }) => {

  const btnClickHandler = () => {
    history.push('/select-source-page')
  }

  return (
    <PageContainer>
      <Typography variant="h1" gutterBottom>What would you like to do today?</Typography>
      <Typography variant="h6" gutterBottom>Welcome to Airboxr. Let's start with the task you want to accomplish today</Typography>
      <Button variant="outlined" color="primary" onClick={btnClickHandler}>
        Import Data
      </Button><br />
      <Button variant="outlined" color="secondary" onClick={btnClickHandler}>
        Lookup Data
      </Button>
    </PageContainer>
  )
}

export default Homepage;