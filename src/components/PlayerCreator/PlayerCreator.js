import { Component } from "react";
import PlayerInput from "../PlayerInput";

class PlayerCreator extends Component {

    constructor(props){
        super(props);

        this.state = {
            player_name: "name",
            player_skill: 1,
            player_position: "fr",

            players: [],
            teamOne: [],
            teamTwo: [],
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRandom = this.handleRandom.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    //takes in name of state variable to change and its value
    handleInput(e, name){
        let obj = {};
        obj[name] = e.currentTarget.value;
        this.setState(obj)
    }

    //adds values in local state to players array as a player object
    handleAdd(){
        let player = {
            player_name: this.state.player_name, 
            player_skill: this.state.player_skill, 
            player_position: this.state.player_position 
        }
        this.setState({players: [...this.state.players, player]})
    }

    //randomises teams and calls api post methods
    handleRandom(){
        const { players } = this.state;
        //randomly sorts players in players array
        this.setState({players: players.sort(() => Math.random() - 0.5 )})
        //after players are randomised - adds first half of array to team 1 and second half to team 2
        this.setState({
            teamOne: [...players.slice(0, (players.length/2))],
            teamTwo: [...players.slice((players.length/2), players.length)]
        })
    }

    handlePost(){

        const {addPlayer, teamOneId, teamTwoId} = this.props;

        const {teamOne, teamTwo} = this.state;
        teamOne.forEach(function(player) {
            addPlayer({
                player_name: player.player_name,
                player_skill: player.player_skill,
                player_position: player.player_position,
                teamId: teamOneId,
            })
        })
        teamTwo.forEach(function(player) {
            addPlayer({
                player_name: player.player_name,
                player_skill: player.player_skill,
                player_position: player.player_position,
                teamId: teamTwoId,
            })
        })
    }

  render(){

    return( 
      <>
        <PlayerInput
            handleInput={this.handleInput}
            handleAdd={this.handleAdd}
        /> 
        <br/>
        <button onClick={this.handleRandom}>Randomise</button>
        <button onClick={this.handlePost}>post</button>
        {/* <button >Skill Based Random</button> */}
      </>
    )
  }
}
export default PlayerCreator;
