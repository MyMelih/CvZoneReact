import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import JobsRightBar from "../components/JobsRightBar";
import PostSection from "../components/PostSection";

import ProjectsLeftSideBar from "../components/ProjectsLeftSideBar";
const ProjectsScreen = () => {
  return (
    <Container>
      <Row style={{ paddingTop: "2rem" }}>
        <Col sm={12} md={6} lg={3} xl={3}>
          <ProjectsLeftSideBar />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <PostSection />
        </Col>
        <Col sm={12} md={6} lg={3} xl={3}>
          <JobsRightBar />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsScreen;
