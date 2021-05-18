import { Component } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class StartScreen extends Component {
  render() {
    return (
      <>
        <Container className="home">
          {/* //creates a new match post request to the api, saves match id to main state*/}
          <div className={"text-center mt-4"}>
            <Row>
              <Link to="team-creator">
                <Button className={"button p-2"} onClick={this.props.startApp}>
                  Start Selecting
                </Button>
              </Link>
            </Row>
            <Row>
              <Link to="/history">
                <Button className="button p-2">Previous Matches</Button>
              </Link>
              <h1>Back-End currently disabled</h1>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}
export default StartScreen;
