import React from "react";
import Tab from "./Tab";

const Tabs = ({ tabsData, tabClickHandler, tab, setTab }) => {
  return (
    <div className="tabs">
      {tabsData?.map((each, i) => (
        <Tab
          data={each}
          key={i}
          icon={each.icon}
          label={each.label}
          active={each.label == tab.label}
          tabClickHandler={tabClickHandler}
        />
      ))}
    </div>
  );
};

export default Tabs;
