import { Typography } from '@material-ui/core';
import React from 'react';
import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBody,
  TopbarBackButton
} from "../layout-components";
import { HistoryProp } from '../../types';
import TableDashBoard from './TableDashboard';

interface Props extends HistoryProp {
  match: any
}
const SelectTablePage: React.FC<Props> = ({ history, match }) => {

  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: () => { history.goBack(); console.log("Clicked back") }
  };

  return (
    <PageContainer>
      <FixedTopBar title="Select Table" leftButton={topbarLeftButton} />
      <FixedMiddleBody>
        <Typography variant="h5">
          {match.params.sourceName.split('-').join(' ').toUpperCase()} has the following tables ready for import.
        Please select the table you would like to import.
        </Typography>
        <TableDashBoard />
      </FixedMiddleBody>
    </PageContainer>
  )
};

export default SelectTablePage;