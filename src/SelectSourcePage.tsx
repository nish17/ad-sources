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
    console.log("TODO - whatever you want to test/debug")
    setIsClicked(prevstate => !prevstate);
  }


  return (
    <PageContainer>
      <FixedTopBar title="Select source" leftButton={topbarLeftButton} />
      <FixedMiddleBodyWithVerticalScroll>
        {/* Body goes here */}
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