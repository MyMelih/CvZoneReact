import React from "react";

const ProjectsLeftSideBar = () => {
  return (
    <div class="filter-secs">
      <div class="filter-heading">
        <h3>Filtreler</h3>
        <a href="#" title="">
          Tümünü Temizle
        </a>
      </div>
      <div class="paddy">
        <div class="filter-dd">
          <div class="filter-ttl">
            <h3>Yetenekler</h3>
            <a href="#" title="">
              Temizle
            </a>
          </div>
          <form>
            <input type="text" name="search-skills" placeholder="Yetenek Ara" />
          </form>
        </div>
        <div class="filter-dd">
          <div class="filter-ttl">
            <h3>Çalışma Saatleri</h3>
            <a href="#" title="">
              Temizle
            </a>
          </div>
          <ul class="avail-checks">
            <li>
              <input type="radio" name="cc" id="c1" />
              <label for="c1">
                <span></span>
              </label>
              <small>Saatlik</small>
            </li>
            <li>
              <input type="radio" name="cc" id="c2" />
              <label for="c2">
                <span></span>
              </label>
              <small>Part Time</small>
            </li>
            <li>
              <input type="radio" name="cc" id="c3" />
              <label for="c3">
                <span></span>
              </label>
              <small>Full Time</small>
            </li>
          </ul>
        </div>
        <div class="filter-dd">
          <div class="filter-ttl">
            <h3>İş Türü</h3>
            <a href="#" title="">
              Temizle
            </a>
          </div>
          <form class="job-tp">
            <select>
              <option>Grafik Tasarımcı</option>
              <option>Wordpress Geliştirici</option>
              <option>Php Geliştirici</option>
              <option>Java Geliştirici</option>
            </select>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </form>
        </div>
        <div class="filter-dd">
          <div class="filter-ttl">
            <h3>Deneyim Seviyesi</h3>
            <a href="#" title="">
              Temizle
            </a>
          </div>
          <form class="job-tp">
            <select>
              <option>Bir deneyim seviyesi seçin</option>
              <option>1 Yıl</option>
              <option>2 Yıl</option>
              <option>3 Yıl</option>
              <option>4 Yıl</option>
              <option>5 Yıl</option>
            </select>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </form>
        </div>
        <div class="filter-dd">
          <div class="filter-ttl">
            <h3>Şehir</h3>
            <a href="#" title="">
              Temizle
            </a>
          </div>
          <form class="job-tp">
            <select>
              <option>Bir şehir seçin</option>
              <option>Konya</option>
              <option>İstanbul</option>
              <option>Ankara</option>
              <option>İzmir</option>
              <option>Antalya</option>
            </select>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectsLeftSideBar;
