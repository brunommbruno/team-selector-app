import { Component } from "react";
import MatchTeams from "../MatchTeams";
import {Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import kitStriped from "../../img/kit-striped.png";
import kitClassic from "../../img/kit-classic.png";
import kitCheckers from "../../img/kit-checkers.png";


class Match extends Component{

    constructor(props){
        super(props);

        this.handlePatch = this.handlePatch.bind(this);
    }

    handlePatch(team){
        this.props.editTeam({
            id: team.id,
            score: team.score + 1,
            team_color: team.team_color,
            team_name: team.team_name,
            team_kit: team.team_kit,
        })

    }

    render(){

        const { players, teams } = this.props;
        const teamOneKit = teams[0].team_kit === "classic" ? kitClassic : teams[0].team_kit === "striped" ? kitStriped : kitCheckers;
        const teamTwoKit = teams[1].team_kit === "classic" ? kitClassic : teams[1].team_kit === "striped" ? kitStriped : kitCheckers;

        const teamOne = players.filter((player) => {
            return player.team_id === teams[0].id;
        })
        const teamTwo = players.filter((player) => {
            return player.team_id === teams[1].id;
        })

        return(
            <>
                <Container>
                <Row>
                    <Col>
                    <br/>
                    </Col>
                </Row>
                <Row>
                    <MatchTeams 
                        teamName={teams[0].team_name}
                        teamColor={teams[0].team_color}
                        players={teamOne}
                        teamKit={teamOneKit}
                    />
                    <MatchTeams 
                        teamName={teams[1].team_name}
                        teamColor={teams[1].team_color}
                        players={teamTwo}
                        teamKit={teamTwoKit}
                    />
                </Row>
                <Row className={"text-center"}>
                    <Col>
                    Score: {teams[0].score}
                    <Button className={"button"} onClick={() => this.handlePatch(teams[0])}>+</Button>
                    </Col>
                    <Col>
                    Score: {teams[1].score}
                    <Button className={"button"} onClick={() => this.handlePatch(teams[1])}
                    >+</Button>
                    </Col>
                </Row>
                </Container>
                <Link to="/"><Button onClick={this.props.reset}>Finish Game!</Button></Link>
            </>
        )
    }
}

export default Match;
