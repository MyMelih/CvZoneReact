import React from "react";

const PostTopBar = () => {
  return (
    <div className="post-topbar">
      <div className="user-picy">
        <img
          src="https://yavuzsinan.com/assets/images/me3.jpg"
          width="50"
          height="55"
          alt=""
        />
      </div>
      <div className="post-st">
        <ul>
          <li>
            <a className="post_project" href="#" title="">
              Proje İlanı
            </a>
          </li>
          <li>
            <a className="post-jb active" href="#" title="">
              İş İlanı
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostTopBar;
