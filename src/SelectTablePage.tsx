import { Typography } from '@material-ui/core';
import React from 'react';
import {
  PageContainer,
  FixedTopBar,
  FixedBottomPominentButton,
  TopbarBackButton
} from "./layout-components";
import { HistoryProp } from './types';
const SelectTablePage: React.FC<HistoryProp> = ({ history }) => {

  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: () => { history.goBack(); console.log("Clicked back") }
  };

  const NextBtnHandler = () => {
    // setIsClicked(prevstate => !prevstate);

  }

  return (
    <PageContainer>
      <FixedTopBar title="Select Table" leftButton={topbarLeftButton} />
      <Typography variant="h5">
        
        </Typography>    
      <FixedBottomPominentButton
        title="Next"
        onClick={() => NextBtnHandler()}
      />
    </PageContainer>
  )
};

export default SelectTablePage;