import React from "react";
import {
  BsClockHistory,
  BsBookmarks,
  BsEnvelopeFill,
  BsFillHeartFill,
} from "react-icons/bs";
import {
  AiFillAppstore,
  AiOutlineEllipsis,
  AiOutlineEye,
} from "react-icons/ai";
import { MdShareLocation, MdModeComment } from "react-icons/md";

const PostSection = () => {
  return (
    <div className="post-bar">
      <div className="post_topbar">
        <div className="usy-dt">
          <img
            src="https://yavuzsinan.com/assets/images/me3.jpg"
            height="50"
            width="50"
            alt=""
            className="sug-image"
          />
          <div className="usy-name">
            <h3>Yavuz Sinan</h3>
            <span>
              <BsClockHistory className="esc-time" />3 dakika önce
            </span>
          </div>
        </div>
        <div className="ed-opts">
          <a href="#" title="" className="ed-opts-open">
            <i>
              <AiOutlineEllipsis className="title-icon" />
            </i>
          </a>
          <ul className="ed-options">
            <li>
              <a href="#" title="">
                Düzenle
              </a>
            </li>
            <li>
              <a href="#" title="">
                Şikayet Et
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="epi-sec">
        <ul className="descp">
          <li>
            <AiFillAppstore className="esc-time sug-image" size={19} />
            <span>Efsane Yazılımcı</span>
          </li>
          <li>
            <MdShareLocation className="esc-time sug-image" size={19} />
            <span>Konya</span>
          </li>
        </ul>
        <ul className="bk-links">
          <li>
            <a href="#" title="">
              <div
                style={{
                  backgroundColor: "#53d690",
                }}
                className="icon-back"
              >
                <BsBookmarks
                  size={16}
                  style={{ color: "white", margin: "auto" }}
                />
              </div>
            </a>
          </li>
          <li>
            <a href="#" title="">
              <div
                style={{
                  backgroundColor: "#e44d3a",
                }}
                className="icon-back"
              >
                <BsEnvelopeFill
                  size={17}
                  style={{ color: "white", margin: "auto" }}
                />
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="job_descp">
        <h3>Senior Grafik Tasarımcı</h3>
        <ul className="job-dt">
          <li>
            <a href="#" title="">
              Full Time
            </a>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna
          sit amet...{" "}
          <a href="#" title="">
            devamı için
          </a>
        </p>
        <ul className="skill-tags">
          <li>
            <a href="#" title="">
              Adobe
            </a>
          </li>
          <li>
            <a href="#" title="">
              Photoshop
            </a>
          </li>
          <li>
            <a href="#" title="">
              CSS
            </a>
          </li>
          <li>
            <a href="#" title="">
              Javascript
            </a>
          </li>
          <li>
            <a href="#" title="">
              Wordpress
            </a>
          </li>
        </ul>
      </div>
      <div className="job-status-bar">
        <ul className="like-com">
          <li>
            <a href="#" className="com">
              <i style={{ paddingRight: "3px" }}>
                <BsFillHeartFill size={19} />
              </i>
              Beğen 25
            </a>
          </li>
          <li>
            <a href="#" title="" className="com">
              <MdModeComment size={19} /> Yorum 15
            </a>
          </li>
        </ul>
        <a className="com">
          <i>
            <AiOutlineEye size={25} />
          </i>
          <span style={{ verticalAlign: "bottom" }}>Görüntüleme 50</span>
        </a>
      </div>
    </div>
  );
};

export default PostSection;
