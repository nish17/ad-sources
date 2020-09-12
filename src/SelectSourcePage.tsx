import React from "react";
import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBodyWithVerticalScroll,
  FixedBottomPominentButton,
  TopbarBackButton
} from "./layout-components";

import SourceDashboard from "./SourceDashboard";

const SelectSourcePage = () => {
  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: () => console.log("Clicked back")
  };
  return (
    <PageContainer>
      <FixedTopBar title="Select source" leftButton={topbarLeftButton} />
      <FixedMiddleBodyWithVerticalScroll>
        {/* Body goes here */}
        <SourceDashboard />
      </FixedMiddleBodyWithVerticalScroll>
      <FixedBottomPominentButton
        title="Test / Debug"
        onClick={() => console.log("TODO - whatever you want to test/debug")}
      />
    </PageContainer>
  );
};

export default SelectSourcePage;