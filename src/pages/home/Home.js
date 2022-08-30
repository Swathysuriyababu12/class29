import React from "react";
import "./home.css";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

import Buttons from "../../components/buttons/button";
import ProgressB from "../../components/progress/progress";
import WithHeaderExample from "../../components/card/card";

const Home = () => {
  return (
    <>
      <div className="home">
        <SideBar />
        <div className="homeContainer">
          <NavBar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="chf">
            <div className="charts">
              <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
            </div>
            <div className="feature">
              <Featured />
            </div>
          </div>
          <div className="PW">
            <div className="pro">
              Latest Transactions
              <ProgressB />
            </div>
            <div className="with">
              <WithHeaderExample />
            </div>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Buttons />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
