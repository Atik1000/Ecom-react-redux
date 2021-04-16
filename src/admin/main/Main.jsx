import React from "react";
import Chart from "../charts/Chart";

const Main = () => {
  return (
    <main>
      <div className="main_container">
        <div className="main_title">
          <div className="main_greeting">
            <h1>Hello Ecom</h1>
            <p>Welcome to your admin dashbord</p>
          </div>
        </div>
        <div className="main_cards">
          <div className="card">
            <i className="fa fa-user-o fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-btn-primary-p">Number of subscribe</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-calendar fa-2x text-red"></i>
            <div className="card_inner">
              <p className="text-btn-primary-p">Number of subscribe</p>
              <span className="font-bold text-title">5728</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-video-camera fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-btn-primary-p">Number of subscribe</p>
              <span className="font-bold text-title">5728</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-thumbs-o-up fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-btn-primary-p">Number of subscribe</p>
              <span className="font-bold text-title">5728</span>
            </div>
          </div>
          <div className="charts">
            <div className="charts_left">
              <div className="charts_left_title">
                <div>
                  <h1>Daily reports</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <i className="fa fa-usb"></i>
              </div>
              <Chart />
            </div>
            <div className="charts_right">
              <div className="charts_right_title">
                <div>
                  <h1>Stats Reports</h1>
                  <p>Lorem, ipsum dolor.</p>
                </div>
                <i className="fa fa-user"></i>
              </div>
              <div className="charts_right_cards">
                <div className="card1">
                  <h1>Income</h1>
                  <p>7542</p>
                </div>
                <div className="card2">
                  <h1>Income</h1>
                  <p>7542</p>
                </div>
                <div className="card3">
                  <h1>Income</h1>
                  <p>7542</p>
                </div>
                <div className="card4">
                  <h1>Income</h1>
                  <p>7542</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <i></i>
        </div>
      </div>
    </main>
  );
};

export default Main;
