import "./TransactionBetting.css";

const TransactionBetting = () => {
  return (
    <div className="transaction-betting">
      <div className="left-cont1">
        <b className="title7">Getting 6</b>
        <div className="created-at">5 May 2023 at 10:30 am</div>
      </div>
      <div className="right-cont1">
        <div className="coins1">
          <img className="coin-icon" alt="" src="/coin.svg" />
          <b className="title7">10</b>
        </div>
        <div className="type1">Win</div>
      </div>
    </div>
  );
};

export default TransactionBetting;
