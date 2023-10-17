import React, { useEffect, useState } from "react";
import "./featuredInfo.css";
import { School, Work, Group } from "@mui/icons-material";
import axios from "../../axios";

const FeaturedInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/add/data");

      setData(data);
      console.log(data.length);
    };
    getData();
  }, []);

  return (
    <div className="featuredInfo">
      <h3>Dashboard</h3>
      <div className="featured">
        <div className="featuredItem">
          <div className="featuredTop">
            <span className="featuredTitle">USERS</span>
            <div className="featuredIcon">
              <Group fontSize="large" />
            </div>
          </div>
          <div className="featuredTotal">{data.length}</div>
        </div>
        <div className="featuredItem">
          <div className="featuredTop">
            <span className="featuredTitle">EDUCATIONS</span>
            <div className="featuredIcon">
              <School fontSize="large" />
            </div>
          </div>
          <div className="featuredTotal">123</div>
        </div>
        <div className="featuredItem">
          <div className="featuredTop">
            <span className="featuredTitle">JOB</span>
            <div className="featuredIcon">
              <Work fontSize="large" />
            </div>
          </div>
          <div className="featuredTotal">123</div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default FeaturedInfo;
