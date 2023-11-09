import React, { useState } from "react";
import "./BetPage.scss";
import Countdown from "../Countdown/Countdown";
import { betting_question } from "./data";
import Option from "./Option";

const BetPage = () => {
  const [optionActive, setOptionActive] = useState(null);
  const optionClickHandler = (option) => {
    console.log(option);
    setOptionActive(option);
  };

    const betNowClickHandler = () => {
        if (!optionActive) {
         toast
      }
    alert(`${optionActive.title} choosed and cliked on bet button`);
  };
  return (
    <div className="bet-contaner">
      <Countdown />
      <p className="question">{betting_question?.question}</p>
      {betting_question?.options?.map((each) => (
        <Option
          key={each.id}
          data={each}
          coins={each.win_coins}
          optionClickHandler={optionClickHandler}
          option_id={each.id}
          title={each.title}
          active={each.id == optionActive?.id}
        />
      ))}

      <div className="betting-button-with-label">
        <button onClick={betNowClickHandler} className="bet-button">
          <b className="title13">{`Bet ${betting_question.bet_coins} `}</b>
          <img className="icon5" alt="" src="/coin-icon.svg" />
        </button>
        <p className="label4">Betting Amount</p>
      </div>
    </div>
  );
};

export default BetPage;
