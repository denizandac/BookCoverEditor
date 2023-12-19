import DropdownMenu from "../DropdownMenu/DropdownMenu";

const TabContent = ({ activeTab }) => {
  return (
    <>
      {activeTab === 0 && <DropdownMenu />}
      {activeTab === 1 && <p>Cover Edit Component</p>}
      {activeTab === 2 && <p>Preview & Download Component</p>}
    </>
  );
};

export default TabContent;
