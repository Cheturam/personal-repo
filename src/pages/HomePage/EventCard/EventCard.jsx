import React from "react";
import "./EventCard.scss";
import { useNavigate } from "react-router-dom";

const EventCard = ({ banner_img, users_count, streamer_img, id }) => {
  const navigate = useNavigate();
  const eventClickHandler = () => {
    navigate(`/event/${id}`);
  };
  return (
    <div onClick={eventClickHandler} className="event event_card">
      <img className="banner-icon" alt="" src={banner_img} />

      <div className="live-users-cont">
        <div className="live-pill-root2">
          <div className="live-pill1">
            <img className="dot-icon1" alt="" src="/dot-icon.svg" />
            <b className="label9">Live</b>
          </div>
        </div>
        <div className="users-count-root2 ">
          <div className="users-pill1">
            <img className="user-icon1" alt="" src="/user-icon.svg" />
            <div className="user-count1">{users_count}</div>
          </div>
        </div>
      </div>

      <img className="streamer-image-icon2" alt="" src={streamer_img} />
    </div>
  );
};

export default EventCard;
