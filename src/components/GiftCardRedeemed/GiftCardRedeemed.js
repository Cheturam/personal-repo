import "./GiftCardRedeemed.css";

const GiftCardRedeemed = () => {
  return (
    <div className="gift-card-redeemed">
      <div className="title17">Congratulations!!!!</div>
      <div className="content">
        <div className="description5">
          Gift card has been redeemed successfully
        </div>
        <div className="what-next-card">
          <div className="top-cont1">
            <div className="title18">What’s Next?</div>
            <img className="info-icon" alt="" src="/info-icon.svg" />
          </div>
          <div className="description6">
            You will soon receive an email with gift vocher. This process may
            take around 24 hours , You can check status in transactions page.
          </div>
        </div>
        <button className="primarybutton2">
          <b className="title19">Go Back</b>
        </button>
      </div>
      <img className="gift-card-redeemed-child" alt="" src="/group-11743.svg" />
      <img className="icon-with-shadow" alt="" src="/icon-with-shadow.svg" />
    </div>
  );
};

export default GiftCardRedeemed;
