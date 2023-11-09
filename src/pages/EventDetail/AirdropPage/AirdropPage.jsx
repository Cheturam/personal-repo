import React from "react";
import "./AirdropPage.scss";
import { airdropData } from "../data";
import AirDrop from "./Airdrop/AirDrop";

const AirdropPage = () => {
  return (
    <div>
      {airdropData?.map((each) => (
        <AirDrop
          type={each.type}
          coins={each.coins}
          id={each.id}
          left={each.left}
          title={each.title}
          giftImage={each.giftImage}
          key={each.id}

        />
      ))}
    </div>
  );
};

export default AirdropPage;
