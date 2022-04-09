import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
const JobsRightBar = () => {
  return (
    <div className="right-sidebar">
      <div className="widget widget-jobs">
        <div className="sd-title">
          <h3>En İyi İşler</h3>
          <i>
            <a href="#">
              <AiOutlineEllipsis className="title-icon" />
            </a>
          </i>
        </div>
        <div className="jobs-list">
          <div className="job-info">
            <div className="job-details">
              <h3>Senior Ürün Tasarımcısı</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
            </div>
            <div className="hr-rate">
              <span>Konya</span>
            </div>
          </div>
          <div className="job-info">
            <div className="job-details">
              <h3>Junior Seo Tasarımcı</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
            </div>
            <div className="hr-rate">
              <span>İzmir</span>
            </div>
          </div>
          <div className="job-info">
            <div className="job-details">
              <h3>Senior PHP Geliştirici</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
            </div>
            <div className="hr-rate">
              <span>Bursa</span>
            </div>
          </div>
        </div>
      </div>

      <div className="widget widget-jobs">
        <div className="sd-title">
          <h3>Haftanın Gözdeleri</h3>
          <i>
            <a href="#">
              <AiOutlineEllipsis className="title-icon" />
            </a>
          </i>
        </div>
        <div className="jobs-list">
          <div className="job-info">
            <div className="job-details">
              <h3>Senior Ürün Tasarımcısı</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
            </div>
            <div className="hr-rate">
              <span>Konya</span>
            </div>
          </div>
          <div className="job-info">
            <div className="job-details">
              <h3>Junior Seo Tasarımcı</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
            </div>
            <div className="hr-rate">
              <span>İzmir</span>
            </div>
          </div>
          <div className="job-info">
            <div className="job-details">
              <h3>Senior PHP Geliştirici</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
            </div>
            <div className="hr-rate">
              <span>Bursa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsRightBar;
