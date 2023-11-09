import NavBar from "../../components/NavBar/NavBar";
import BannerItem from "./BannerItem/BannerItem";
import EventCard from "./EventCard/EventCard";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage page">
      <NavBar />
      <BannerItem
        id={1}
        banner_img={"/background1@2x.png"}
        isLive={true}
        streamer_img={"/streamer-image@2x.png"}
        started_at={"12 mins ago"}
        streamer_name={"Bhardwaj Jain"}
        users_count={"1,234"}
      />

      <div className="events-section">
        <b className="section-label">On going Events</b>
        <div className="events">
          <EventCard
            banner_img={"/background1@2x.png"}
            streamer_img={"/streamer-image@2x.png"}
            users_count={"1,234"}
            id={1}
          />
          <EventCard
            banner_img={"/background1@2x.png"}
            streamer_img={"/streamer-image@2x.png"}
            users_count={"1,234"}
            id={2}
          />
          <EventCard
            banner_img={"/background1@2x.png"}
            streamer_img={"/streamer-image@2x.png"}
            users_count={"1,234"}
            id={3}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
