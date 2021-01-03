import { Component } from "react";
import { Nav, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

class StartScreen extends Component {

  render(){

    return(
      <>
        
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



        <div style={{backgroundColor: "white"}}className={"p-3 home-info text-dark m-4"}>
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

                <li>Randomise The Teams And Update Scores!</li>
            </ul>

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
      </>
    )
  }
}
export default StartScreen;
