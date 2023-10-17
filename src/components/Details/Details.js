import React from "react";
import "./Details.css";
import FeaturedInfo from "../featuredInfo/featuredInfo";
import UserBirthday from "../userBirthday/userBirthday";
import WidgetLg from "../widgetLg/widgetLg";
import WidgetSm from "../widgetSm/widgetSm";

const Details = () => {
  return (
    <div className="detail">
      <FeaturedInfo />
      <UserBirthday />
      <div className="widgets">
        <WidgetLg />
        <WidgetSm />
      </div>
    </div>
  );
};

export default Details;
