import React from 'react'
import Button from '@material-ui/core/Button';
import { PageContainer, FixedMiddleBody, FixedTopBar } from "./layout-components";
import { HistoryProp } from './types';



const Homepage: React.FC<HistoryProp> = ({ history }) => {

  const btnClickHandler = () => {
    history.push('/select-source-page')
  }

  return (
    <PageContainer>
      <FixedTopBar title="What would you like to do today?" />
      <FixedMiddleBody>
        Welcome to Airboxr. Let's start with the task you want to accomplish today
        <Button variant="outlined" color="primary" onClick={btnClickHandler}>
          Import Data
      </Button><br />
        <Button variant="outlined" color="secondary" onClick={btnClickHandler}>
          Lookup Data
      </Button>
      </FixedMiddleBody>
    </PageContainer>
  )
}

export default Homepage;