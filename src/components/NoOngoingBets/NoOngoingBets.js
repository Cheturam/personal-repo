import "./NoOngoingBets.css";

const NoOngoingBets = () => {
  return (
    <div className="no-ongoing-bets">
      <img className="icon" alt="" src="/icon.svg" />
      <div className="description">
        No Bets to show yet. Start betting to see your data on this screen
      </div>
      <div className="primarybutton">
        <div className="title">Start Betting</div>
      </div>
    </div>
  );
};

export default NoOngoingBets;
