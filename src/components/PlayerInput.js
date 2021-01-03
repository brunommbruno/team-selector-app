import { Component } from "react";
import Inputs from "./Inputs";
import {Container, Row, Col, Form, ToggleButtonGroup, ToggleButton, Button} from "react-bootstrap";

import att from "../img/att.png";
import mid from "../img/mid.png";
import def from "../img/def.png";
import gk from "../img/gk.png";

class PlayerInput extends Component {


  render(){

    const {handleInput, handlePosition} = this.props;

    return(
        <>
          <Container className={"text-center mt-5 fs-15 player-input"}>
              <Form>
                <Row>
                  <Col>
                    <Inputs 
                      type="text"
                      placeholder="Steve"
                      handleInput={handleInput}
                      title="Name"
                      stateName="player_name"
                    />
                  </Col>

                  <Col>
                    <Inputs 
                      type="select"
                      handleInput={handleInput}
                      title="Skill"
                      stateName="player_skill"
                    />
                  </Col>
                </Row>
              </Form>

                <Row>
                  
                  <ToggleButtonGroup type="radio" name="options" className={"mt-4 button-group"}>
                    <ToggleButton
                      value={1}
                      variant="transparent"
                      onClick={(e) => handlePosition("gk", "player_position")}
                    >
                      <img 
                          src={gk} 
                          className={"player-creator-img"}
                          alt={"Goalkeeper Icon"}
                        />
                        <p className={"text-white"}>Goalkeeper</p>
                  </ToggleButton>

                  <ToggleButton
                    value={2}
                    variant="transparent"
                    onClick={(e) => handlePosition("def", "player_position")}
                  >
                    <img 
                        src={def} 
                        className={"player-creator-img"}
                        alt={"Defender Icon"}
                      />
                      <p className={"text-white"}>Defender</p>
                  </ToggleButton>

                  <ToggleButton
                    value={3}
                    variant="transparent"
                    onClick={(e) => handlePosition("mid", "player_position")}
                  >
                    <img 
                        src={mid} 
                        className={"player-creator-img"}
                        alt={"Midfielder Icon"}
                      />
                      <p className={"text-white"}>Midfielder</p>
                  </ToggleButton>

                  <ToggleButton
                    value={4}
                    variant="transparent"
                    onClick={(e) => handlePosition("att", "player_position")}
                  >
                    <img 
                        src={att} 
                        className={"player-creator-img"}
                        alt={"Attacker Icon"}
                      />
                      <p className={"text-white"}>Attacker</p>
                  </ToggleButton>
                </ToggleButtonGroup>

              <Button 
                onClick={this.props.handleAdd}
                style={{fontSize: "1rem"}}
                className={"m-3 mt-1 button"}
              >Add Player!</Button>
              </Row>
            </Container>
        </>
    )
  }
}
export default PlayerInput;
