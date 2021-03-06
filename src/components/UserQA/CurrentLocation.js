import React, { Component } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import posed from "react-pose";
import LocationSearchInput from "./LocationSearchInput.js";
import "./CurrentLocation.scss";

const Section = posed.section({
  open: {
    transition: { ease: "easeInOut", duration: 1400 },
    x: 0,
    delayChildren: 0,
    staggerChildren: 0,
    opacity: 1,
    delay: 0
  },
  closed: {
    x: 0,
    delay: 0,
    opacity: 0
  }
});

const Div = posed.div({
  open: {
    transition: { ease: "easeOut", duration: 1000 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 20 }
});

const P = posed.p({
  open: {
    transition: { ease: "easeOut", duration: 1000 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 400 }
});

const Label = posed.label({
  open: {
    transition: { ease: "easeOut", duration: 1000 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 1500 }
});

const DivSearchInput = posed.div({
  open: {
    transition: { ease: "easeOut", duration: 1000 },
    y: 0,
    opacity: 1,
    x: 0
  },
  closed: { y: 0, opacity: 0, x: 800 }
});

class CurrentLocation extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  componentDidUpdate(oldProps) {
    if (!oldProps.isActive && this.props.isActive) {
      this.setState({ isOpen: true });
    }
  }
  render() {
    const { isOpen } = this.state;
    return (
      <Section
        pose={isOpen ? "open" : "closed"}
        className="text-center container-fluid"
      >
        <Row>
          <span className="float-left pl-3">
            <Link
              to="#0"
              onClick={this.props.previousStep}
              className="text-secondary"
            >
              <i className="fas fa-arrow-left mx-2" />
              Retour
            </Link>
          </span>
        </Row>
        <Div className="bg-current-location m-4" />
        <P className="lead my-4">Trouvez des soins proches de vous.</P>
        <Row>
          <Col
            sm={{ span: 12 }}
            className=" px-5 d-flex justify-content-center"
          >
            <DivSearchInput className="col-md-6 col-xs-12">
              <Col className="bg-light shadow-sm border rounded p-2 ">
                <LocationSearchInput
                  onGeolocation={this.props.onGeolocation}
                  nextStep={event => this.props.nextStep(event)}
                />
              </Col>
            </DivSearchInput>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 12 }} className="d-flex justify-content-center">
            {/* prescription checkbox */}
            <Form className="p-2 small text-left">
              <div key="hint-checkbox" className="hint-checkbox m-2 px-2">
                <Label>
                  <Form.Check
                    type="checkbox"
                    id="prescription"
                    className="d-inline mr-2"
                  />
                  <span className="text-muted">
                    C&#39;est pour renouveller une ordonnance ?{" "}
                    <span className="text-secondary">Cliquez ici !</span>
                  </span>
                </Label>
              </div>
            </Form>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default CurrentLocation;
