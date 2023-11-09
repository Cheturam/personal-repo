import "./AirDrop.css";

const AirDrop = ({ id, title, left, type, coins, giftImage }) => {
  const redeemClickHandler = () => {
    alert(`${title} click Handler`);
  };
  return (
    <div className="airdrop">
      <div className="header1">
        {type == "coins" ? (
          <div className="coins-cont3">
            <img className="icon9" alt="" src="/icon9.svg" />
            <div className="coins6">
              <b>{coins || 0}</b>
              <span className="bjcoins"> BJcoins</span>
            </div>
          </div>
        ) : (
          <img className="prize-icon" alt="" src={giftImage} />
        )}

        <img className="gift-icon2" alt="" src="/gift-icon2.svg" />
      </div>
      <div className="title-11">{title}</div>
      <div className="blue-text1">Hurry Up! First come first serve</div>
      <button onClick={redeemClickHandler} className="redeem-container">
        <span className="redeem1">Redeem</span>
      </button>
      <div className="pill1">
        <b className="coins6">2 Left</b>
      </div>
    </div>
  );
};

export default AirDrop;
