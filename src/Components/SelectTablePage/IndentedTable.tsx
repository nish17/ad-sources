import React from 'react'

import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBody,
  TopbarBackButton
} from "../layout-components";
import data from '../../utils/TableData';
import { HistoryProp } from '../../types';
import { Typography } from '@material-ui/core';

interface Props extends HistoryProp {
  match: any
}

const IndentedTable: React.FC<Props> = (props) => {

  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: () => { props.history.goBack(); console.log("Clicked back") }
  };
  console.log(props.match);
  return (
    <PageContainer>
      <FixedTopBar title="Select Table" leftButton={topbarLeftButton} />
      <FixedMiddleBody>
        <Typography variant="h5">
          {props.match.params.sourceName.split('-').join(' ').toUpperCase()} has the following tables ready for import.
        Please select the table you would like to import.124235234645634
        </Typography>
        {/* <TableDashBoard {...props} /> */}
      </FixedMiddleBody>
    </PageContainer>
  )
}

export default IndentedTable;