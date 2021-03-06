import React from "react";

import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBodyWithVerticalScroll,
  FixedBottomPominentButton,
  TopbarBackButton
} from "../layout-components";

import SourceDashboard from "./SourceDashboard";
import { HistoryProp } from '../../types';

const SelectSourcePage: React.FC<HistoryProp> = (props) => {
  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: () => { props.history.goBack(); }
  };

  const TestBtnHandler = () => {
    console.log('Test/Debug Button clicked!');
  }

  return (
    <PageContainer>
      <FixedTopBar title="Select source" leftButton={topbarLeftButton} />
      <FixedMiddleBodyWithVerticalScroll>
        <SourceDashboard {...props}/>
      </FixedMiddleBodyWithVerticalScroll>
      <FixedBottomPominentButton
        title="Test / Debug"
        onClick={() => TestBtnHandler()}
      />
    </PageContainer>
  );
};

export default SelectSourcePage;