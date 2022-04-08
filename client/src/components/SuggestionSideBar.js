import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
const SuggestionSideBar = () => {
  return (
    <div className="suggestions full-width">
      <div className="sd-title">
        <h3>Önerilenler</h3>
        <i>
          <AiOutlineEllipsis />
        </i>
      </div>
      <div className="suggestions-list">
        <div className="suggestion-usd">
          <img
            src="https://yavuzsinan.com/assets/images/me3.jpg"
            width="35"
            height="35"
            alt=""
            className="sug-image"
          />
          <div className="sgt-text">
            <h4>İrem Altınöz</h4>
            <span>Grafik Tasarımcı</span>
          </div>
          <span>
            <i>
              <BsPlusSquare size={25} className="plus-button" />
            </i>
          </span>
        </div>
        <div className="suggestion-usd">
          <img
            src="https://yavuzsinan.com/assets/images/me3.jpg"
            height="35"
            width="35"
            alt=""
            className="sug-image"
          />
          <div className="sgt-text">
            <h4>Melih Yılmaz</h4>
            <span>Grafik Tasarımcı</span>
          </div>
          <span>
            <i>
              <BsPlusSquare size={25} className="plus-button" />
            </i>
          </span>
        </div>
        <div className="suggestion-usd">
          <img
            src="https://yavuzsinan.com/assets/images/me3.jpg"
            width="35"
            height="35"
            alt=""
            className="sug-image"
          />
          <div className="sgt-text">
            <h4>Yavuz Sinan Aydemir</h4>
            <span>Wordpress Geliştirici</span>
          </div>
          <span>
            <i>
              <BsPlusSquare size={25} className="plus-button" />
            </i>
          </span>
        </div>
        <div className="suggestion-usd">
          <img
            src="https://yavuzsinan.com/assets/images/me3.jpg"
            width="35"
            height="35"
            alt=""
            className="sug-image"
          />
          <div className="sgt-text">
            <h4>Muhammet Ali Taban</h4>
            <span>Php Geliştirici</span>
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

export default SuggestionSideBar;
