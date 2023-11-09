import "./RedeemPrize.css";

const RedeemPrize = () => {
  return (
    <div className="redeem-prize">
      <img className="prize-image-icon2" alt="" src="/prize-image2@2x.png" />
      <div className="bottom-cont1">
        <div className="left-cont2">
          <div className="top-title">
            <span>{`Gift Card worth `}</span>
            <span className="span">$10</span>
          </div>
          <div className="bottom-title">
            <img className="icon8" alt="" src="/icon8.svg" />
            <div className="coins5">Purchase with 100</div>
          </div>
        </div>
        <button className="primarybutton1">
          <b className="title14">Redeem</b>
        </button>
      </div>
    </div>
  );
};

export default RedeemPrize;
