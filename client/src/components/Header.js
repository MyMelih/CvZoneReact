import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
  Dropdown,
  InputGroup,
} from "react-bootstrap";
import {
  AiOutlineHome,
  AiOutlineBank,
  AiOutlineProfile,
  AiTwotoneMessage,
  AiOutlineSearch,
  AiOutlineNotification,
} from "react-icons/ai";
import { BsFillPeopleFill, BsFillHandbagFill } from "react-icons/bs";
import "../style.css";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" className="navbar-dark navbar ">
      <Container>
        <Navbar.Brand href="#" style={{ marginRight: "5%" }}>
          CVZONE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex search-box" style={{}}>
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Search"
                className=""
                aria-label="Search"
              />
              <Button className="search-button" id="search-button">
                <AiOutlineSearch />
              </Button>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#action1">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <AiOutlineHome />
                AnaSayfa
              </div>
            </Nav.Link>

            <Nav.Link href="#action2">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <AiOutlineBank />
                Firmalar
              </div>
            </Nav.Link>

            <Nav.Link href="#action2">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <AiOutlineProfile />
                Projeler
              </div>
            </Nav.Link>

            <Nav.Link href="#action2">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <BsFillPeopleFill />
                Kullanıcılar
              </div>
            </Nav.Link>

            <Nav.Link href="#action2">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <BsFillHandbagFill />
                İş İlanları
              </div>
            </Nav.Link>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "white",
              }}
            >
              <AiTwotoneMessage style={{ marginTop: "10px" }} />
              <NavDropdown
                title="Mesaj"
                id="navbarScrollingDropdown"
                style={{ marginTop: "-10px", textAlign: "center" }}
                align="end"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "white",
              }}
            >
              <AiOutlineNotification style={{ marginTop: "10px" }} />
              <NavDropdown
                title="Bildirimler"
                id="navbarScrollingDropdown"
                style={{ marginTop: "-10px" }}
                align="end"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse>
          <Nav>
            <img
              src="https://yavuzsinan.com/assets/images/me3.jpg"
              style={{
                borderRadius: "100%",
                height: "50px",
                width: "50px",
                marginLeft: "10px",
              }}
            />
            <div
              style={{
                margin: "auto",
                alignItems: "center",
                verticalAlign: "",
                justifyContent: "center",
                color: "white",
              }}
            >
              <NavDropdown title="YSA" id="navbarScrollingDropdown" align="end">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
