import { Component } from "react";

class Match extends Component{

    constructor(props){
        super(props);
    }

    render(){

        const teamOne = this.props.players.filter((player) => {
            return player.teamNum === 0;
        })
        const teamOneGk = teamOne.filter((player) => { return player.player_position === "gk";})
        const teamOneDef = teamOne.filter((player) => { return player.player_position === "def";})
        const teamOneMid = teamOne.filter((player) => { return player.player_position === "mid";})
        const teamOneAtt = teamOne.filter((player) => { return player.player_position === "att";})

        const teamTwo = this.props.players.filter((player) => {
            return player.teamNum === 1;
        })
        const teamTwoGk = teamTwo.filter((player) => { return player.player_position === "gk";})
        const teamTwoDef = teamTwo.filter((player) => { return player.player_position === "def";})
        const teamTwoMid = teamTwo.filter((player) => { return player.player_position === "mid";})
        const teamTwoAtt = teamTwo.filter((player) => { return player.player_position === "att";})

        return(
            <>
                <h2>Team One</h2>
                {teamOne.map(player => (
                    <p>name: {player.player_name}, skill: {player.player_skill}, position: {player.player_position}</p>
                ))}

                <h2>Team Two</h2>
                {teamTwo.map(player => (
                    <p>name: {player.player_name}, skill: {player.player_skill}, position: {player.player_position}</p>
                ))}

            </>
        )
    }
}

export default Match;
