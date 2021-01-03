import { Component } from "react";
import {Container, Row, Col, Button, Form} from "react-bootstrap";

import axios from "../../axios";

import kitStriped from "../../img/kit-striped.png";
import kitClassic from "../../img/kit-classic.png";
import kitCheckers from "../../img/kit-checkers.png";


class PreviousMatches extends Component{

    constructor(props){
        super(props);

        this.state = {
            match: [],
            teamsLoaded: false,
            playersLoaded: false,
            matchIdInput: "",
            teamOneId: null,
            teamTwoId: null,
            players: [],
        }

        this.getMatch = this.getMatch.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.getPlayers = this.getPlayers.bind(this);
    }

    getMatch(){
        axios.get(`/matches/${this.state.matchIdInput}`).then(({data}) => {
            this.setState({match: data.data, teamsLoaded: true, teamOneId: data.data.teams[0].id, teamTwoId: data.data.teams[1].id})
        })
    }

    getPlayers(){
        axios.get(`/teams/${this.state.teamOneId}/players`).then(({data}) => {
            this.setState({players: data.data,});
        })
        axios.get(`/teams/${this.state.teamTwoId}/players`).then(({data}) => {
            this.setState({players: [this.state.players ,data.data], playersLoaded: true});
        })
    }


    handleInput(e){
        this.setState({
            matchIdInput: e.currentTarget.value,
        })
    }

    render(){

        const { match } = this.state

        return(
            <>
                <Container>
                    <Row>
                        <Col className={"text-center"}>
                            <input placeholder={"Match Id: e.g 67"}onChange={(e) => this.handleInput(e)}></input>
                            <Button className={"button"}onClick={this.getMatch}>Get Teams</Button>
                            {this.state.teamsLoaded ? <Button className={"button"}onClick={this.getPlayers}>Get Players</Button> : null}
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                    </Col>
                        {this.state.teamsLoaded ?
                        <>
                            <Col>
                                <div className={"text-center fs-15 team-display"}>
                                <h2>{match.teams[0].team_name}</h2>
                                <img 
                                className={"m-3 team-creator-kit"}
                                src={match.teams[0].team_kit === "classic" ? kitClassic : match.teams[0].team_kit === "striped" ? kitStriped : kitCheckers}
                                alt={"team kit"}
                                />
                                <div className={"team-color-bar"}style={{backgroundColor: `${match.teams[0].team_color}`}}></div>
                                {this.state.playersLoaded ?
                                <div>
                                    {this.state.players[0].map(player => (
                                        <p>{player.player_name}</p>
                                    ))}
                                </div>
                                :
                                null
                                }
                                </div>
                            </Col>

                            <Col>
                                <div className={"text-center fs-15 team-display"}>
                                <h2>{match.teams[1].team_name}</h2>
                                <img 
                                    className={"m-3 team-creator-kit"}
                                    src={match.teams[1].team_kit === "classic" ? kitClassic : match.teams[1].team_kit === "striped" ? kitStriped :  kitCheckers}
                                    alt={"team kit"}
                                />
                                <div className={"team-color-bar"}style={{backgroundColor: `${match.teams[1].team_color}`}}></div>
                                {this.state.playersLoaded ?
                                <div>
                                    {this.state.players[0].map(player => (
                                        <p>{player.player_name}</p>
                                    ))}
                                </div>
                                :
                                null
                                }
                                </div>
                            </Col>
                        </>
                    :
                    null
            }

            <Col>
            </Col>
            </Row>

            {this.state.teamsLoaded  && this.state.playersLoaded ?
            <Row className={"text-center"}>
                <Col>
                </Col>
                <Col>
                {match.teams[0].score}
                </Col>
                <Col>
                {match.teams[1].score}
                </Col>
                <Col>
                </Col>
            </Row>
            :
            null
            }
            </Container>
            </>
        )
    }

}

export default PreviousMatches;
