import React, { useState } from "react";
import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBodyWithVerticalScroll,
  FixedBottomPominentButton,
  TopbarBackButton
} from "./layout-components";

import SourceDashboard from "./SourceDashboard";
import { HistoryProp } from './types';

const SelectSourcePage: React.FC<HistoryProp> = ({ history }) => {
  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: () => { history.goBack(); console.log("Clicked back") }
  };

  const [isClicked, setIsClicked] = useState(false);


  const TestBtnHandler = () => {
    setIsClicked(prevstate => !prevstate);
  }


  return (
    <PageContainer>
      <FixedTopBar title="Select source" leftButton={topbarLeftButton} />
      <FixedMiddleBodyWithVerticalScroll>
        <SourceDashboard isClicked={isClicked} />
      </FixedMiddleBodyWithVerticalScroll>
      <FixedBottomPominentButton
        title="Test / Debug"
        onClick={() => TestBtnHandler()}
      />
    </PageContainer>
  );
};

export default SelectSourcePage;