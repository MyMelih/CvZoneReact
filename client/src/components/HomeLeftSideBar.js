import React from "react";
import { Button, Card } from "react-bootstrap";
import "../style.css";
const HomeLeftSideBar = () => {
  return (
    <div className="user-data full-width">
      <div className="user-profile">
        <div className="username-dt">
          <div className="usr-pic">
            <img
              src="https://yavuzsinan.com/assets/images/me3.jpg"
              width="100"
              height="100"
              alt=""
            ></img>
          </div>
        </div>

        <div className="user-specs">
          <h3>Yavuz Sinan Aydemir</h3>
          <span>React Developer</span>
        </div>
      </div>
      <ul className="user-fw-status">
        <li>
          <h4>Takip</h4>
          <span>34</span>
        </li>
        <li>
          <h4>Takipçi</h4>
          <span>155</span>
        </li>
        <li>
          <a href="#" title="">
            Profili Görüntüle
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HomeLeftSideBar;
