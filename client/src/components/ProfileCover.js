import React from "react";
import { BsCameraFill } from "react-icons/bs";
import { Container } from "react-bootstrap";
const profileCover = () => {
  return (
    <div>
      <section class="cover-sec">
        <img
          src={require("../images/melihArka.jpeg")}
          height="400"
          width="1600"
          alt=""
        />
        <Container>
          <a href="#" title="">
            <i class="">
              <BsCameraFill />
            </i>
            Change Image
          </a>
        </Container>
      </section>
    </div>
  );
};

export default profileCover;
