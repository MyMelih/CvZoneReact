import React from "react";
import { Container } from "react-bootstrap";
import { BsEnvelopeFill } from "react-icons/bs";
import Companies from "../components/Companies";

const CompaniesScreen = () => {
  return (
    <>
      <div className="backColor">
        <Container>
          <Companies />
        </Container>
      </div>
    </>
  );
};

export default CompaniesScreen;
