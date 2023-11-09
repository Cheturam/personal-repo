import { useNavigate } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/')
  }
  return (
    <div className="navbar">
      <div className="menu-logo-cont">
        <img className="menu-icon" alt="" src="/menu.svg" />
        <b onClick={goHome} className="logo">BJ Live</b>
      </div>
      <div className="wallet">
        <img className="coin-icon3" alt="" src={"/coin2.svg"} />
        <b className="b4">300</b>
      </div>
    </div>
  );
};

export default NavBar;

