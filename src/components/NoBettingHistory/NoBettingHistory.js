import "./NoBettingHistory.css";

const NoBettingHistory = () => {
  return (
    <div className="no-betting-history">
      <img className="icon2" alt="" src="/icon2.svg" />
      <b className="title2">No Betting History</b>
      <div className="description2">
        Sorry! There is no betting data. Your bids and there results will appear
        here.
      </div>
    </div>
  );
};

export default NoBettingHistory;
