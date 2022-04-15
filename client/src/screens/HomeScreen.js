import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import HomeLeftSideBar from "../components/HomeLeftSideBar";
import SuggestionSideBar from "../components/SuggestionSideBar";
import JobsRightBar from "../components/JobsRightBar";
import PopularSideBar from "../components/PopularSideBar";
import PostTopBar from "../components/PostTopBar";
import PostSection from "../components/PostSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const HomeScreen = () => {
  return (
    <div>
      <div>
        <Container>
          <Row style={{ paddingTop: "2rem" }}>
            <Col sm={12} md={6} lg={3} xl={3}>
              <HomeLeftSideBar />
              <SuggestionSideBar />
            </Col>
            <Col sm={12} md={6} lg={6} xl={6}>
              <PostTopBar />
              <PostSection />
            </Col>
            <Col sm={12} md={6} lg={3} xl={3}>
              <JobsRightBar />
              <PopularSideBar />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeScreen;
