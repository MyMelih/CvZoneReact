import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
const PopularSideBar = () => {
  return (
    <div className="widget suggestions ">
      <div className="sd-title">
        <h3>Popüler Firmalar</h3>
        <i>
          <a href="#">
            <AiOutlineEllipsis className="title-icon" />
          </a>
        </i>
      </div>
      <div className="suggestions-list">
        <div className="suggestion-usd">
          <img
            src="https://i.pinimg.com/originals/ce/af/83/ceaf8384322af790486cff176a0a2f24.png"
            width="35"
            height="35"
            alt=""
            className="sug-image"
          />
          <div className="sgt-text">
            <h4>Microsoft Tr</h4>
            <span>Java Developer</span>
          </div>
          <span>
            <i>
              <BsPlusSquare size={25} className="plus-button" />
            </i>
          </span>
        </div>
        <div className="suggestion-usd">
          <img
            src="https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg"
            width="35"
            height="35"
            alt=""
            className="sug-image"
          />
          <div className="sgt-text">
            <h4>IBM</h4>
            <span>PHP Developer</span>
          </div>
          <span>
            <i>
              <BsPlusSquare size={25} className="plus-button" />
            </i>
          </span>
        </div>
        <div className="suggestion-usd">
          <img
            src="https://lh5.ggpht.com/fZx-_9Y24VI-W8ujLBIh0HzDbuwemUfixF9srpRVZip8QIGywdnjhefIGTlIzpVOqwE"
            height="35"
            width="35"
            alt=""
            className="sug-image"
          />
          <div className="sgt-text">
            <h4>Oracle</h4>
            <span>Wordpress Developer</span>
          </div>
          <span>
            <i>
              <BsPlusSquare size={25} className="plus-button" />
            </i>
          </span>
        </div>
        <div className="suggestion-usd">
          <img
            src="https://i.pinimg.com/originals/98/6c/09/986c095a109a79c675a70a08d9185fbd.png"
            width="35"
            height="35"
            alt=""
            className="sug-image"
          />
          <div className="sgt-text">
            <h4>SAP</h4>
            <span>C &amp; C++ Developer</span>
          </div>
          <span>
            <i>
              <BsPlusSquare size={25} className="plus-button" />
            </i>
          </span>
        </div>
        <div className="suggestion-usd">
          <img
            src="https://3.bp.blogspot.com/-tqBBbTJMxxs/UyLzvef_HSI/AAAAAAAABAA/S6K13-oae0g/s1600/ericsson_logo.png"
            height="35"
            width="35"
            alt=""
            className="sug-image"
          />
          <div className="sgt-text">
            <h4>Ericsson</h4>
            <span>Graphic Designer</span>
          </div>
          <span>
            <i>
              <BsPlusSquare size={25} className="plus-button" />
            </i>
          </span>
        </div>
        <div className="suggestion-usd">
          <img
            src="https://i.ya-webdesign.com/images/logo-nintendo-png-7.png"
            width="35"
            height="35"
            alt=""
            className="sug-image"
          />
          <div className="sgt-text">
            <h4>Nintendo</h4>
            <span>PHP Developer</span>
          </div>
          <span>
            <i>
              <BsPlusSquare size={25} className="plus-button" />
            </i>
          </span>
        </div>
        <div className="view-more">
          <a href="#" title="">
            Daha Fazla Göster
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopularSideBar;
