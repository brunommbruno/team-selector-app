import { Component } from "react";
import PlayerInput from "../PlayerInput";
import { Link } from "react-router-dom";

import user from "../../img/user.png"
import kitStriped from "../../img/kit-striped.png";
import kitClassic from "../../img/kit-classic.png";
import kitCheckers from "../../img/kit-checkers.png";

import { Alert, Container, Row, Col, Button, ListGroup} from "react-bootstrap";

class PlayerCreator extends Component {

    constructor(props){
        super(props);

        this.state = {
            player_name: "name",
            player_skill: 1,
            player_position: "att",

            player_amount: this.props.player_amount,
            players: [],
            teamOne: [],
            teamTwo: [],

            teamsRandomised: false,
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRandom = this.handleRandom.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handlePosition = this.handlePosition.bind(this);
    }

    //takes in name of state variable to change and its value
    handleInput(e, name){
        let obj = {};
        obj[name] = e.currentTarget.value;
        this.setState(obj)
    }

    handlePosition(position, name){
        let obj = {};
        obj[name] = position;
        this.setState(obj)
      }

    //adds values in local state to players array as a player object
    handleAdd(){
        if(this.state.player_amount > 0){
            let player = {
                player_name: this.state.player_name, 
                player_skill: this.state.player_skill, 
                player_position: this.state.player_position 
            }
            this.setState({
                players: [...this.state.players, player],
                player_amount: this.state.player_amount - 1,
            })
        }
    }

    //randomises teams and calls api post methods
    handleRandom(){
        const { players } = this.state;
        //randomly sorts players in players array
        this.setState({players: players.sort(() => Math.random() - 0.5 )})
        //after players are randomised - adds first half of array to team 1 and second half to team 2
        this.setState({
            teamOne: [...players.slice(0, (players.length/2))],
            teamTwo: [...players.slice((players.length/2), players.length)],
            teamsRandomised: true,
        })

    }

    handlePost(){

        const {addPlayer, teamOneId, teamTwoId} = this.props;

        const {teamOne, teamTwo} = this.state;
        //runs the add player api method for every player in the team - passing through its team aswell
        teamOne.forEach(function(player) {
            addPlayer({
                player_name: player.player_name,
                player_skill: player.player_skill,
                player_position: player.player_position,
                teamId: teamOneId,
                teamNum: 0,
            })
        })
        teamTwo.forEach(function(player) {
            addPlayer({
                player_name: player.player_name,
                player_skill: player.player_skill,
                player_position: player.player_position,
                teamId: teamTwoId,
                teamNum: 1,
            })
        })
    }

  render(){

    let team1Skill = 0;
    let team2Skill = 0;
    this.state.teamOne.map(player => {
        return team1Skill = +team1Skill + +player.player_skill;
    })
    this.state.teamTwo.map(player => {
        return team2Skill = +team2Skill + +player.player_skill;
    })

    return( 
      <>

        {/* Player input component is disabled after enough players have been added*/}
        <Container>
            <Row>
                <Col>
                    <PlayerInput
                        handleInput={this.handleInput}
                        handleAdd={this.handleAdd}
                        handlePosition={this.handlePosition}
                    />
                </Col>

                <Col className={"mt-5"}>
                    <Alert variant={"info"} style={{fontSize:"1.5rem"}}>Players Left: {this.state.player_amount}</Alert>
                    <ListGroup className={"d-flex flex-row flex-wrap"}>
                    {this.state.players.map(player => (
                        <ListGroup.Item variant={"info"} style={{width: "30%"}}>
                            
                            <h5><img src={user}style={{height: "2rem"}}alt={"user icon"}/>{`${player.player_name}`}</h5>
                        </ListGroup.Item>
                    ))}
                    </ListGroup>
                </Col>
            </Row>
            <Row>
                {this.props.teams.map(team => (
                    
                    <Col className={"text-center player-creator-teams"}>
                        <h2>{team.team_name}</h2>
                        <img 
                            className={"m-3"}
                            style={{height: "3rem"}} 
                            src={team.team_kit === "classic" ? kitClassic : team.team_kit === "striped" ? kitStriped : kitCheckers}
                            alt={"team kit"}
                        />
                            <div style={{margin:"auto",width:"60%",height: "20px", backgroundColor: `${team.team_color}`}}></div>
                            <p>Skill Level: {team.id === this.props.teamOneId ? team1Skill : team2Skill}</p>
                    </Col>
                    ))}
                <Col>
                    {!this.state.player_amount > 0 ? 
                        <Button className={"button mx-auto"} onClick={this.handleRandom}>Randomise the teams!</Button> : null
                    }
                </Col>
                <Col>
                {this.state.teamsRandomised ? 
                        <Link to="/match"><Button className={"button"}onClick={this.handlePost}>See the teams!</Button></Link> : null
                    }
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}
export default PlayerCreator;
