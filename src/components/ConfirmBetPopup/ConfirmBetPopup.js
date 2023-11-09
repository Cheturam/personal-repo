import "./ConfirmBetPopup.css";

const ConfirmBetPopup = () => {
  return (
    <div className="confirm-bet-popup">
      <b className="title22">Confirm Bet</b>
      <div className="content2">
        <div className="description8">
          Are you sure you want to bet 10BJ Coins on Option 1
        </div>
      </div>
      <div className="buttons-cont">
        <button className="close-button">
          <b className="title23">Close</b>
        </button>
        <button className="primarybutton4">
          <b className="title24">Confirm</b>
        </button>
      </div>
      <img className="confirm-bet-popup-child" alt="" src="/group-11743.svg" />
    </div>
  );
};

export default ConfirmBetPopup;
