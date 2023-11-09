import "./AirdropRedeemPopup.css";

const AirdropRedeemPopup = () => {
  return (
    <div className="airdrop-redeem-popup">
      <div className="title25">Airdrop Redeemed</div>
      <div className="content3">
        <div className="coins-cont4">
          <img className="coin-icon2" alt="" src="/coin-icon1.svg" />
          <div className="title26">
            <b>120</b>
            <span className="bjcoins1"> BJcoins</span>
          </div>
        </div>
        <div className="description9">
          You are the one of lucky user among 100 users. Stay active by seeing
          the airdrop notification and can earn More Gift and Vochers.
        </div>
      </div>
      <button className="primarybutton5">
        <b className="title27">Close</b>
      </button>
      <img
        className="airdrop-redeem-popup-child"
        alt=""
        src="/group-11743.svg"
      />
    </div>
  );
};

export default AirdropRedeemPopup;
