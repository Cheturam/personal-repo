import React from "react";

const Option = ({
  title,
  coins,
  option_id,
  optionClickHandler,
  active,
  data,
}) => {
  return (
    <div
      onClick={() => optionClickHandler(data)}
      className={` ${active ? " option-active" : "option"}`}
    >
      <b className="team-a">{title}</b>
      <div className="coins-cont">
        <b className="team-a">{`Get ${coins} `}</b>
        <img className="icon5" alt="" src="/icon5.svg" />
      </div>
    </div>
  );
};

export default Option;
