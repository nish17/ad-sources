import { Typography } from '@material-ui/core';
import React from 'react';
import {
  PageContainer,
  FixedTopBar,
  FixedBottomPominentButton,
  TopbarBackButton
} from "./layout-components";
// import { HistoryProp } from './types';

import { History } from 'history';

interface Props {
  history: History,
  match: any
}
const SelectTablePage: React.FC<Props> = ({ history, match }) => {

  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: () => { history.goBack(); console.log("Clicked back") }
  };

  const NextBtnHandler = () => {
    console.log(match);
    // setIsClicked(prevstate => !prevstate);

  }

  return (
    <PageContainer>
      <FixedTopBar title="Select Table" leftButton={topbarLeftButton} />
      <Typography variant="h5">
        {match.params.sourceName.split('-').join(' ')} has the following tables ready for import. 
        Please select the table you would like to import.
        </Typography>
      <FixedBottomPominentButton
        title="Next"
        onClick={() => NextBtnHandler()}
      />
    </PageContainer>
  )
};

export default SelectTablePage;