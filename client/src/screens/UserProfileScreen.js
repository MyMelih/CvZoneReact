import React from "react";
import ProfileCover from "../components/ProfileCover";
import { Row, Col, Container } from "react-bootstrap";
import UserLeftSideBar from "../components/UserLeftSideBar";
import SuggestionSideBar from "../components/SuggestionSideBar";
import UserMidBar from "../components/UserMidBar";
const UserProfileScreen = () => {
  return (
    <div>
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
