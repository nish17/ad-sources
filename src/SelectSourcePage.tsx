import React, {useState} from "react";
import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBodyWithVerticalScroll,
  FixedBottomPominentButton,
  TopbarBackButton
} from "./layout-components";

import SourceDashboard from "./SourceDashboard";

const SelectSourcePage:React.FC = () => {
  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: () => console.log("Clicked back")
  };

  const [isClicked, setIsClicked] = useState(false);


  const TestBtnHandler = () => {
    setIsClicked(prevstate => !prevstate);
  }


  return (
    <PageContainer>
      <FixedTopBar title="Select source" leftButton={topbarLeftButton} />
      <FixedMiddleBodyWithVerticalScroll>
        <SourceDashboard isClicked={isClicked}/>
      </FixedMiddleBodyWithVerticalScroll>
      <FixedBottomPominentButton
        title="Test / Debug"
        onClick={() => TestBtnHandler()}
      />
    </PageContainer>
  );
};

export default SelectSourcePage;