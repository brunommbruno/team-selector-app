import { Component } from "react";
import {Col, Alert} from "react-bootstrap";

import att from "../img/att.png";
import mid from "../img/mid.png";
import def from "../img/def.png";
import gk from "../img/gk.png";

class MatchTeams extends Component{

    render(){

        const {teamName, teamColor, players, teamKit} = this.props

        return(
            <Col className={"home-info"}>
                <h2 className={"text-center"}>{teamName}</h2>
                <div className={"team-color-bar"}style={{backgroundColor: `${teamColor}`}}></div>
                <div className={"mt-3 text-center player-display"}>
                {/* maps through each player to display them */}
                {players.map(player => (
                    <Alert variant="success">
                        <img className={"match-img"}src={teamKit}alt={"team kit"}/>
                        {player.player_name}
                        <img className={"match-img"}src={player.player_position === "gk" ? gk : player.player_position === "def" ? def : player.player_position === "mid" ? mid : att}alt={"player position"}/>
                    </Alert>
                ))}
                </div>
            </Col>
        )
    }

}

export default MatchTeams;
