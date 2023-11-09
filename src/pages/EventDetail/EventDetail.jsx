import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Tabs from "../../components/Tabs/Tabs";
import BannerItem from "../HomePage/BannerItem/BannerItem";
import "./EventDetail.css";
import { AIRDROP_TYPE, BET_TYPE, CHAT_TYPE, tabsData } from "./data";
import BetPage from "./BetPage/BetPage";
import ChatPage from "./ChatPage/ChatPage";
import AirdropPage from "./AirdropPage/AirdropPage";

const EventDetail = () => {
  const [tab, setTab] = useState(tabsData[0]);
  const tabClickHandler = (tab) => {
    setTab(tab);
  };
  console.log(tab);

  return (
    <div className="eventdetail page">
      <NavBar dimensionCode="/coin.svg" />
      <BannerItem
        banner_img={"/background1@2x.png"}
        isLive={true}
        streamer_img={"/streamer-image@2x.png"}
        started_at={"12 mins ago"}
        streamer_name={"Bhardwaj Jain"}
        users_count={"1,234"}
      />
      <Tabs
        tabsData={tabsData}
        tabClickHandler={tabClickHandler}
        tab={tab}
        setTab={setTab}
      />
      <div className="p-22 w-100">
        {tab.type === BET_TYPE && <BetPage />}
        {tab.type === CHAT_TYPE && <ChatPage />}
        {tab.type === AIRDROP_TYPE && <AirdropPage />}
      </div>
    </div>
  );
};

export default EventDetail;
