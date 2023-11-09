import React from "react";
import "./BannerItem.scss";
import { useNavigate } from "react-router-dom";

const BannerItem = ({
  banner_img,
  users_count,
  isLive,
  streamer_img,
  streamer_name,
  started_at,
  id,
}) => {
  const navigate = useNavigate();
  const bannerItemClickHandler = () => {
    if (id) {
      navigate(`event/${id}`);
    }
  };
  return (
    <div
      onClick={bannerItemClickHandler}
      className="banner-scroll-item1 banner_item"
    >
      <img className="background" alt="" src={banner_img} />
      <div className="top_cont">
        <div className="live-pill-root1">
          <div className="live-pill1">
            <img className="dot-icon1" alt="" src="/dot-icon.svg" />
            <b className="label9">Live</b>
          </div>
        </div>
        <div className="users-count-root1">
          <div className="users-pill1">
            <img className="user-icon1" alt="" src="/user-icon.svg" />
            <div className="user-count1">{users_count}</div>
          </div>
        </div>
      </div>
      <div className="streamerinfo1 bottom_cont">
        <img className="streamer-image-icon1" alt="" src={streamer_img} />
        <div className="rightcont1">
          <div className="streamer1">{streamer_name}</div>
          <div className="label8">{started_at}</div>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
