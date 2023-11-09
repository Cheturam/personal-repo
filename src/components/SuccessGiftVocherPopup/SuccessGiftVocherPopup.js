import "./SuccessGiftVocherPopup.css";

const SuccessGiftVocherPopup = () => {
  return (
    <div className="success-gift-vocher-popup">
      <img className="popup-bg-icon" alt="" src="/popup-bg.svg" />
      <img className="close-icon" alt="" src="/close-icon.svg" />
      <div className="top-cont">
        <img className="prize-image-icon" alt="" src="/prize-image@2x.png" />
        <div className="right">
          <div className="coupon-code">$5 Gift Voucher</div>
          <div className="coupon-copy-cont">
            <div className="coupon-code">RFEM34543095094LK</div>
            <img className="copy-icon" alt="" src="/copy-icon.svg" />
          </div>
        </div>
      </div>
      <div className="gift-vocher-cont">
        <div className="coupon-code">Gift Voucher No.</div>
        <b className="b">$1000</b>
      </div>
      <div className="seperator" />
      <div className="status-cont">
        <div className="coupon-code">Status</div>
        <b className="status">Success</b>
      </div>
      <div className="seperator1" />
      <div className="order-made-cont">
        <div className="coupon-code">Order Made</div>
        <b className="b">Feb 25, 2023</b>
      </div>
      <div className="bottom-cont">
        <img className="bg-icon" alt="" src="/bg.svg" />
        <div className="title5">How to Redeem ?</div>
        <div className="description4">
          <p className="you-need-to">
            You need to Visit amazon dot com . You can buy any product and paste
            this voucher at billing page you get 5$ discount on any product.
          </p>
          <p className="you-need-to">Thanks Using BJ Live</p>
        </div>
      </div>
      <div className="gift-icon-cont">
        <img className="background-icon" alt="" src="/background.svg" />
        <img className="gift-icon" alt="" src="/gift-icon.svg" />
      </div>
    </div>
  );
};

export default SuccessGiftVocherPopup;
