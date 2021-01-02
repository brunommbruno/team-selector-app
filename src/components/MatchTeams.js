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
            <Col className={"teams"}>
                <h2 className={"text-center"}>{teamName}</h2>
                <div style={{margin:"auto",width:"60%",height: "20px", backgroundColor: `${teamColor}`}}></div>
                <div className={"mt-3 text-center"}>
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
