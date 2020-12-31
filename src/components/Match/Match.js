import { Component } from "react";

class Match extends Component{

    constructor(props){
        super(props);
    }

    render(){

        const teamOne = this.props.players.filter((player) => {
            return player.teamNum === 0;
        })

        const teamTwo = this.props.players.filter((player) => {
            return player.teamNum === 1;
        })

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
