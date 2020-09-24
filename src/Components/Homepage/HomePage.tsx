import React from 'react'
import {Button, Typography} from '@material-ui/core';
import { PageContainer, FixedMiddleBody, FixedTopBar } from "../layout-components";
import { HistoryProp } from '../../types';

// import '../../s'

const Homepage: React.FC<HistoryProp> = ({ history }) => {

  const btnClickHandler = () => {
    history.push('/select-source-page')
  }

  return (
    <PageContainer>
      <FixedTopBar title="What would you like to do today?" />
      <FixedMiddleBody>
        <Typography style={{marginTop: '30px', fontFamily:'barlow'}} variant="h3" > Welcome to Airboxr. Let's start with the task you want to accomplish today</Typography>
        <Button style={{marginTop: '50px'}} variant="outlined" color="primary" onClick={btnClickHandler}>
          Import Data
      </Button>
        <Button style={{marginTop: '25px'}} variant="outlined" color="secondary" onClick={btnClickHandler}>
          Lookup Data
      </Button>
      </FixedMiddleBody>
    </PageContainer>
  )
}

export default Homepage;