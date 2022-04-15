import React from "react";
import PostSection from "./PostSection";

const UserMidBar = () => {
  return (
    <div className="main-ws-sec">
      <div class="user-tab-sec">
        <h3>Melih Yılmaz</h3>
        <div class="star-descp">
          <span>Grafik Tasarımcı at Freelancer</span>
        </div>
        <div class="tab-feed st2">
          <ul>
            <li data-tab="feed-dd" class="active">
              <a href="#" title="">
                <img src="images/ic1.png" alt="" />
                <span>Gönderi</span>
              </a>
            </li>
            <li data-tab="info-dd">
              <a href="#" title="">
                <img src="images/ic2.png" alt="" />
                <span>Hakkında</span>
              </a>
            </li>
            <li data-tab="saved-jobs">
              <a href="#" title="">
                <img src="images/ic4.png" alt="" />
                <span>Kaydedilen</span>
              </a>
            </li>
            <li data-tab="my-bids">
              <a href="#" title="">
                <img src="images/ic5.png" alt="" />
                <span>Tamamlanan</span>
              </a>
            </li>
            <li data-tab="portfolio-dd">
              <a href="#" title="">
                <img src="images/ic3.png" alt="" />
                <span>Medyalar</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="product-feed-tab current" id="feed-dd">
        <div className="post-section">
          <PostSection />
        </div>
        <div class="product-feed-tab" id="info-dd">
          <div class="user-profile-ov">
            <h3>
              <a href="#" title="" class="overview-open">
                Hakkında
              </a>{" "}
              <a href="#" title="" class="overview-open">
                <i class="fa fa-pencil"></i>
              </a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores aspernatur corporis culpa dolore ea expedita explicabo
              impedit incidunt ipsa iste laborum obcaecati possimus quo quos
              repudiandae sunt temporibus, ullam voluptatibus.
            </p>
          </div>
          <div class="user-profile-ov st2">
            <h3>
              <a href="#" title="" class="exp-bx-open">
                Tecrübeler{" "}
              </a>
              <a href="#" title="" class="exp-bx-open">
                <i class="fa fa-pencil"></i>
              </a>{" "}
              <a href="#" title="" class="exp-bx-open">
                <i class="fa fa-plus-square"></i>
              </a>
            </h3>
            <h4>
              Web Tasarım{" "}
              <a href="#" title="">
                <i class="fa fa-pencil"></i>
              </a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus
              sit amet augue nec urna efficitur tincidunt. Vivamus consectetur
              aliquam lectus commodo viverra.{" "}
            </p>
            <h4>
              UI / UX Geliştirici{" "}
              <a href="#" title="">
                <i class="fa fa-pencil"></i>
              </a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              tempor aliquam felis, nec condimentum ipsum commodo id.
            </p>
            <h4>
              PHP Mühendisliği{" "}
              <a href="#" title="">
                <i class="fa fa-pencil"></i>
              </a>
            </h4>
            <p class="no-margin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus
              sit amet augue nec urna efficitur tincidunt. Vivamus consectetur
              aliquam lectus commodo viverra.{" "}
            </p>
          </div>
          <div class="user-profile-ov">
            <h3>
              <a href="#" title="" class="ed-box-open">
                Eğitim Geçmişi
              </a>{" "}
              <a href="#" title="" class="ed-box-open">
                <i class="fa fa-pencil"></i>
              </a>{" "}
              <a href="#" title="">
                <i class="fa fa-plus-square"></i>
              </a>
            </h3>
            <h4>Konya Teknik Üniversitesi</h4>
            <span>2018 - 2022</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus
              sit amet augue nec urna efficitur tincidunt. Vivamus consectetur
              aliquam lectus commodo viverra.{" "}
            </p>
          </div>
          <div class="user-profile-ov">
            <h3>
              <a href="#" title="" class="lct-box-open">
                Konum
              </a>{" "}
              <a href="#" title="" class="lct-box-open">
                <i class="fa fa-pencil"></i>
              </a>{" "}
              <a href="#" title="">
                <i class="fa fa-plus-square"></i>
              </a>
            </h3>
            <h4>Konya</h4>
            <p>Bosna Hersek Mahallesi Çoşandere Sokak Yüksel Sitesi 8/4</p>
          </div>
          <div class="user-profile-ov">
            <h3>
              <a href="#" title="" class="skills-open">
                Yetenekler
              </a>{" "}
              <a href="#" title="" class="skills-open">
                <i class="fa fa-pencil"></i>
              </a>{" "}
              <a href="#">
                <i class="fa fa-plus-square"></i>
              </a>
            </h3>
            <ul>
              <li>
                <a href="#" title="">
                  HTML
                </a>
              </li>
              <li>
                <a href="#" title="">
                  PHP
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
              <li>
                <a href="#" title="">
                  Photoshop
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Illustrator
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Corel Draw
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMidBar;
