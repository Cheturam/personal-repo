import React from "react";
import "./Tabs.scss";

const Tab = ({ label, icon, active, tabClickHandler, data }) => {
  return (
    <div onClick={()=>tabClickHandler(data)} className={`tab ${active && " active"}`}>
      <img className="tab-icon" alt="" src={icon} />
      <div className="title">{label}</div>
    </div>
  );
};

export default Tab;
