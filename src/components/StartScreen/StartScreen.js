import { Component } from "react";
import { Nav, Button, Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

import def from "../../img/def.png";
import mid from "../../img/mid.png";
import att from "../../img/att.png";


class StartScreen extends Component {


  render(){

    return(
      <>
        <Container>
          <Row>
        <Nav variant="tabs">
            {/* //main intro page */}
            <Nav.Item className={"m-4"}> 
                Home
            </Nav.Item>
            {/* //displays previous matches */}
            <Nav.Item className={"m-4"}>
                History
            </Nav.Item>
        </Nav>
        </Row>


      
        <div className={"p-3 home-info m-4"}>
          <Row>
          <Col>
            <h2>How To Use:</h2>
            <ul>
                <li>Create Each Team By Choosing: </li>
                <ul>
                  <li>Team Name</li>
                  <li>Team Color</li>
                  <li>Kit Design</li>
                </ul>

                <li>Create Your Own Players: </li>
                <ul>
                  <li>Name</li>
                  <li>Position</li>
                  <li>Skill Rating</li>
                </ul>

                <li>Randomise The Teams</li>
                <li>Update Scores!</li>
            </ul>
            </Col>
            <Col className={"player-img"}>
              <img className={"team-creator-kit"}src={def} />
              <img className={"team-creator-kit"}src={mid} />
              <img className={"team-creator-kit"}src={att} />
            </Col>
            </Row>



        </div>

        {/* //changes appOn state to true and initialises main app */}
        {/* //creates a new match post request to the api, saves match id to main state*/}
        <div className={"text-center mt-4"}>
            <Link to="team-creator">
              <Button
                  className={"button p-2"}
                  onClick={this.props.startApp}
              >Start Selecting!
              </Button>
            </Link>
        </div>
        </Container>
      </>
    )
  }
}
export default StartScreen;
