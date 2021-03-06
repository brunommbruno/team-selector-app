import { Component } from "react";

import { Form } from "react-bootstrap";
import { CirclePicker } from "react-color";
import { Container, Row, Col, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

import kitStriped from "../img/kit-striped.png";
import kitClassic from "../img/kit-classic.png";
import kitCheckers from "../img/kit-checkers.png";

class TeamInput extends Component {

  render(){
    const { team, handleInput, handleColor, handleKit, teamName, teamColor} = this.props; 

    return(
        <>
          <Container className={"team-input text-center mt-5 fs-15"}>
            <Form>
              <Row>
                <Col>
                  
                </Col>
                <Col>
                  <Form.Group controlId="formName">
                    <Form.Label>{teamName}</Form.Label>
                      {/* sends value(e) and name of state property to change to handle method*/}
                      {/* eg. handleInput(e, "team1_name") */} 
                    <Form.Control 
                    type="text" 
                    placeholder={teamName} 
                    onChange={(e) => handleInput(e, `${team}_name`)}
                    style={{width: "100%"}}
                    />
                  </Form.Group>
              
                  <Form.Group controlId="formColor" style={{margin: "1rem"}}>
                    <CirclePicker 
                    onChange={(e) => handleColor(e.hex, `${team}_color`)}
                  /> 
                  </Form.Group>

                  {/* changes team_kit state */}
                  <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton
                      value={1}
                      variant="transparent" 
                      onClick={(e) => handleKit("classic", `${team}_kit`)}
                    >
                        <img 
                          src={kitClassic} 
                          className={"team-creator-kit"}
                          alt={"Blank Jersey"}
                        />
                    </ToggleButton>
                    <ToggleButton
                      value={2} 
                      variant="transparent"
                      onClick={(e) => handleKit("striped", `${team}_kit`)}  
                    >
                      <img 
                        src={kitStriped} 
                        className={"team-creator-kit"}
                        alt={"Striped Jersey"}
                      />
                    </ToggleButton>
                    <ToggleButton
                      value={3} 
                      variant="transparent"
                      onClick={(e) => handleKit("checkers", `${team}_kit`)}  
                    >
                      <img 
                        src={kitCheckers} 
                        className={"team-creator-kit"}
                        alt={"Checkered Jersey"}
                      />
                    </ToggleButton>
                  </ToggleButtonGroup> 
                 <div style={{height: "10px", backgroundColor: `${teamColor}`, border: "1px solid white"}}></div>
                </Col>

                <Col>  
                </Col>
              </Row>
            </Form>
          </Container>
        </>
    )
  }
}
export default TeamInput;
