import { useState } from "react";
import Button from "../Button/Button";
import TopDownMenu from "../TopDownMenu/TopDownMenu";
import TabContent from "../TabContent/TabContent";

const PageContent = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const navigatePrevTab = () => {
    setTabIndex((prevTabIndex) => prevTabIndex - 1);
  };
  const navigateNextTab = () => {
    setTabIndex((prevTabIndex) => prevTabIndex + 1);
  };
  return (
    <>
      {tabIndex > 0 && <Button onClick={navigatePrevTab}>Prev</Button>}
      <div>
        <TopDownMenu selectedTab={tabIndex} setSelectedTab={setTabIndex} />
      </div>
      <div>
        <TabContent activeTab={tabIndex} />
      </div>
      {tabIndex < 2 && <Button onClick={navigateNextTab}>Next</Button>}
    </>
  );
};

export default PageContent;
