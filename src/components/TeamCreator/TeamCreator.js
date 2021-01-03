import { Component } from "react";
import TeamInput from "../TeamInput";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

class TeamCreator extends Component {


  constructor(props){
    super(props);

    this.state = {
      teamOne_name: "Team One",
      teamOne_color: "white",
      teamOne_kit: "classic",

      teamTwo_name: "Team Two",
      teamTwo_color: "white",
      teamTwo_kit: "classic",

      player_amount: 4,
    }

    this.handleInput = this.handleInput.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleKit = this.handleKit.bind(this);
  }

  //receives name parameter which handles which state to change
  handleInput(e, name){
    let obj = {};
    obj[name] = e.currentTarget.value;
    this.setState(obj)
  }

  handleColor(color, name){
    let obj = {};
    obj[name] = color;
    this.setState(obj)
  }

  handleKit(kit, name){
    let obj = {};
    obj[name] = kit;
    this.setState(obj)
  }

  handlePost() {
    //posts team 1 to api and adds onto state
    this.props.addTeam({
      team_name: this.state.teamOne_name,
      team_color: this.state.teamOne_color,
      team_kit: this.state.teamOne_kit,
      match_id: this.props.match_id,
    });
    //posts team 2 to api and adds onto state
    this.props.addTeam({
      team_name: this.state.teamTwo_name,
      team_color: this.state.teamTwo_color,
      team_kit: this.state.teamTwo_kit,
      match_id: this.props.match_id,
    });

    this.props.addPlayerAmount({
      player_amount: (this.state.player_amount * 2),
    })
  }


  render(){
    return(
        <>
            <Container>
              <Row>
                <Col>
                  {/* Includes name,color,kit inputs for each team*/}
                  <TeamInput 
                    //handleInput prop allows component to access local state method
                    handleInput={this.handleInput} 
                    handleColor={this.handleColor}
                    handleKit={this.handleKit}
                    team="teamOne"
                    teamName={this.state.teamOne_name}
                    teamColor={this.state.teamOne_color}
                  />
                </Col>
                <Col>
                  <TeamInput 
                    handleInput={this.handleInput}
                    handleColor={this.handleColor}
                    handleKit={this.handleKit}
                    team="teamTwo"
                    teamName={this.state.teamTwo_name}
                    teamColor={this.state.teamTwo_color}
                  />
                </Col>
              </Row>
              <Row>
                {/*saves to state amount of players that can be inputted*/}
                <Col className={"text-center mt-5"}>
                  <label for="player-amount">Players per team: </label>  
                    <select id="player-amount" onChange={(e) => this.handleInput(e, "player_amount")} className={"m-2"}>
                      <option value="6">6</option>
                      <option value="5">5</option>
                      <option value="4" selected="selected">4</option>
                      <option value="3">3</option>
                      <option value="2">2</option>
                    </select>

                </Col>
              </Row>
              <Row>
                <Col className={"text-center mt-3"}>
                <Link to="/add-players" className={"h2"}>
                  <Button 
                    variant="light"
                    onClick={this.handlePost}>
                      Create Teams!
                  </Button>
                </Link>
                </Col>
              </Row>
            </Container>
        </>
    )
  }
}
export default TeamCreator;
