import { Component } from "react";
import MatchTeams from "../MatchTeams";
import {Container, Row, Col } from "react-bootstrap";

import kitStriped from "../../img/kit-striped.png";
import kitClassic from "../../img/kit-classic.png";
import kitCheckers from "../../img/kit-checkers.png";


class Match extends Component{

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
            {console.log(teamOne)}
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
                </Container>


            </>
        )
    }
}

export default Match;