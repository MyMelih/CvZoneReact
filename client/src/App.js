import { Row, Col, Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import HomeLeftSideBar from "./components/HomeLeftSideBar";
import SuggestionSideBar from "./components/SuggestionSideBar";
import JobsRightBar from "./components/JobsRightBar";
import PopularSideBar from "./components/PopularSideBar";
import PostTopBar from "./components/PostTopBar";
import PostSection from "./components/PostSection";
function App() {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#eeeeee" }}>
        <Container>
          <Row>
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
}

export default App;
