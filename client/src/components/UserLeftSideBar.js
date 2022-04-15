import React from "react";
import {
  BsCameraFill,
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsInstagram,
} from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

const UserLeftSideBar = () => {
  return (
    <div class="main-left-sidebar full-width">
      <div class="user_profile">
        <div class="user-pro-img">
          <img
            src={require("../images/melih.jpeg")}
            height="170"
            width="170"
            alt=""
          />
          <a href="#" title="">
            <i class="fa fa-camera">
              <BsCameraFill />
            </i>
          </a>
        </div>
        <div class="user_pro_status">
          <ul class="flw-hr">
            <li>
              <a href="#" title="" class="flww">
                <i class="la la-plus"></i> Takip Et
              </a>
            </li>
            <li>
              <a href="#" title="" class="hre">
                Teklif Ver
              </a>
            </li>
          </ul>
          <ul class="flw-status">
            <li>
              <span>Takip</span>
              <b>34</b>
            </li>
            <li>
              <span>Takipçi</span>
              <b>155</b>
            </li>
          </ul>
        </div>
        <ul class="social_links">
          <li>
            <a href="www.melihylmz30.com" title="">
              <i class="la la-globe">
                <BiWorld style={{ marginRight: "1rem" }} />
                Website
              </i>
            </a>
          </li>
          <li>
            <a href="#" title="">
              <i class="fa fa-facebook-square">
                <BsFacebook style={{ marginRight: "1rem" }} />
                Facebook
              </i>
            </a>
          </li>
          <li>
            <a href="#" title="">
              <i class="fa fa-twitter">
                <BsTwitter style={{ marginRight: "1rem" }} />
                Twitter
              </i>
            </a>
          </li>

          <li>
            <a href="#" title="">
              <i class="fa fa-pinterest">
                <BsPinterest style={{ marginRight: "1rem" }} />
                Pinterest
              </i>
            </a>
          </li>
          <li>
            <a href="#" title="">
              <i class="fa fa-instagram">
                <BsInstagram style={{ marginRight: "1rem" }} />
                Instagram
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserLeftSideBar;
