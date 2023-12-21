import { useState } from "react";
import Button from "../Button/Button";
import TopDownMenu from "../TopDownMenu/TopDownMenu";
import TabContent from "../TabContent/TabContent";
import classes from "./PageContent.module.css";

const PageContent = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const navigatePrevTab = () => {
    setTabIndex((prevTabIndex) => prevTabIndex - 1);
  };
  const navigateNextTab = () => {
    setTabIndex((prevTabIndex) => prevTabIndex + 1);
  };
  return (
    <div className={classes.pageContent}>
      {tabIndex > 0 && (
        <Button className={classes.backButton} onClick={navigatePrevTab}>
          Back
        </Button>
      )}
      <div>
        <TopDownMenu selectedTab={tabIndex} setSelectedTab={setTabIndex} />
      </div>
      <div>
        <TabContent activeTab={tabIndex} setActiveTab={setTabIndex} />
      </div>
      {tabIndex < 1 && (
        <Button className={classes.nextButton} onClick={navigateNextTab}>
          Next
        </Button>
      )}
    </div>
  );
};

export default PageContent;
