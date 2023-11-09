import "./BetPlacedPopup.css";

const BetPlacedPopup = () => {
  return (
    <div className="bet-placed-popup">
      <div className="title20">Congratulations!!!!</div>
      <div className="content1">
        <div className="description7">
          Your Bet has been placed successfully
        </div>
        <button className="primarybutton3">
          <b className="title21">View Ongoing Bets</b>
        </button>
      </div>
      <img className="bet-placed-popup-child" alt="" src="/group-11743.svg" />
      <img className="icon-with-shadow1" alt="" src="/icon-with-shadow1.svg" />
    </div>
  );
};

export default BetPlacedPopup;
