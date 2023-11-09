import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="user-info-cont">
        <div className="left">
          <img className="user-image-icon" alt="" src="/user-image@2x.png" />
          <div className="profile-and-name">
            <b className="nagaraja-p">Nagaraja P.</b>
            <div className="view-profile">View Profile</div>
          </div>
        </div>
        <img className="chevron-icon" alt="" src="/chevron.svg" />
      </div>
      <div className="menu-list">
        <div className="menu-item">
          <img className="icon12" alt="" src="/icon12.svg" />
          <b className="title28">Home</b>
        </div>
        <div className="menu-item1">
          <img className="icon13" alt="" src="/icon13.svg" />
          <div className="title29">My Downline</div>
        </div>
        <div className="menu-item1">
          <img className="icon14" alt="" src="/icon14.svg" />
          <div className="title29">Redeem</div>
        </div>
        <div className="menu-item1">
          <img className="icon15" alt="" src="/icon15.svg" />
          <div className="title29">Transactions</div>
        </div>
        <div className="menu-item1">
          <img className="icon16" alt="" src="/icon16.svg" />
          <div className="title29">Ongoing Bets</div>
        </div>
      </div>
      <div className="bottom-cont2">
        <div className="referral-button">
          <img className="link-icon" alt="" src="/link-icon.svg" />
          <div className="title29">Copy Referral Link</div>
          <div className="icon-cont">
            <div className="icon-cont-child" />
            <img className="share-icon" alt="" src="/share-icon.svg" />
          </div>
        </div>
        <div className="signout-button">
          <img className="icon17" alt="" src="/icon17.svg" />
          <div className="title33">Sign Out</div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
