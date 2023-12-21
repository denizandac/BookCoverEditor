import Button from "../Button/Button";
import classes from "./TopDownMenu.module.css";
const TopDownMenu = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className={classes.menu}>
      <Button isSelected={selectedTab === 0} onClick={() => setSelectedTab(0)}>
        Choose Book
      </Button>
      <Button
        isSelected={selectedTab === 1}
        onClick={() => setSelectedTab(1)}
        disabled={selectedTab < 1}
      >
        Edit Cover
      </Button>
      <Button
        isSelected={selectedTab === 2}
        onClick={() => setSelectedTab(2)}
        disabled={selectedTab < 2}
      >
        Preview & Download
      </Button>
    </div>
  );
};

export default TopDownMenu;
