import { Row, Col } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import HomeLeftSideBar from "./components/HomeLeftSideBar";
import SuggestionSideBar from "./components/SuggestionSideBar";
function App() {
  return (
    <div>
      <Header />
      <Row>
        <Col sm={12} md={6} lg={3} xl={3}>
          <HomeLeftSideBar />
          <SuggestionSideBar />
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}></Col>
        <Col sm={12} md={6} lg={3} xl={3}></Col>
      </Row>
    </div>
  );
}

export default App;
