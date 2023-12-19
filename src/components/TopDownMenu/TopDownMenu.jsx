import Button from "../Button/Button";
const TopDownMenu = ({ selectedTab, setSelectedTab }) => {
  return (
    <>
      <Button onClick={() => setSelectedTab(0)}>Choose Book</Button>
      <Button onClick={() => setSelectedTab(1)} disabled={selectedTab < 1}>
        Edit Cover
      </Button>
      <Button onClick={() => setSelectedTab(2)} disabled={selectedTab < 2}>
        Preview & Download
      </Button>
    </>
  );
};

export default TopDownMenu;
