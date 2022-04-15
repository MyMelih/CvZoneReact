import React, { useEffect } from "react";
import ProfileCover from "../components/ProfileCover";
import { Row, Col, Container } from "react-bootstrap";
import UserLeftSideBar from "../components/UserLeftSideBar";
import SuggestionSideBar from "../components/SuggestionSideBar";
import UserMidBar from "../components/UserMidBar";
import Helmet from "react-helmet";
import $ from "jquery";

const UserProfileScreen = () => {
  const useScript = (url) => {
    useEffect(() => {
      function loadError(onError) {
        console.error(`Failed ${onError.target.src} didn't load correctly`);
      }
      const LoadExternalScript = () => {
        const externalScript = document.createElement("script");
        externalScript.onerror = loadError;
        externalScript.id = "external";
        externalScript.async = true;
        externalScript.type = "text/javascript";
        externalScript.setAttribute("crossorigin", "anonymous");
        document.body.appendChild(externalScript);
        externalScript.src = url;
      };
      LoadExternalScript();
    }, []);
  };
  useScript("../js/jquery.min.js");
  useScript("../js/popper.js");
  useScript("../js/bootstrap.min.js");
  useScript("../js/flatpickr.min.js");
  useScript("../js/slick.min.js");
  useScript("../js/script.js");

  return (
    <div>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="css/animate.css" />
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="css/flatpickr.min.css" />
        <link rel="stylesheet" type="text/css" href="css/line-awesome.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/line-awesome-font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/font-awesome.min.css"
        />
        <link rel="stylesheet" type="text/css" href="lib/slick/slick.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="lib/slick/slick-theme.css"
        />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link rel="stylesheet" type="text/css" href="css/responsive.css" />
      </Helmet>
      <ProfileCover />
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3} xl={3}>
            <UserLeftSideBar />
            <SuggestionSideBar />
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <UserMidBar />
          </Col>
          <Col sm={12} md={6} lg={3} xl={3}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfileScreen;
