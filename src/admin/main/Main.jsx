import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <main>
      <div className="main_container">
        <div className="main_title">
          <div className="main_greeting">
            <p>Welcome to your admin dashbord</p>
          </div>
        </div>
        <div className="main_cards">
          <div className="card">
            <i className="fa fa-user-o fa-2x text-lightblue"></i>

            <div className="card_inner">
              <p className="text-btn-primary-p">Number of Users</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>
          <div className="card">
          <i className="fa fa-list-alt fa-2x text-blue" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-btn-primary-p">Total Category</p>
              <span className="font-bold text-title">5728</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-product-hunt fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-btn-primary-p">Total product</p>
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
          <div className="card">
            <i className="fa fa-thumbs-o-up fa-2x text-green"></i>
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
          <div className="card">
            <i className="fa fa-thumbs-o-up fa-2x text-green"></i>
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

          <div className="card">
            <i className="fa fa-thumbs-o-up fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-btn-primary-p">Number of subscribe</p>
              <span className="font-bold text-title">5728</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
