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
    }


    handleInput(e, name){
        let obj = {};
        obj[name] = e.currentTarget.value;
        this.setState(obj)
    }

    handleAdd(){
        let player = {
            player_name: this.state.player_name, 
            player_skill: this.state.player_skill, 
            player_position: this.state.player_position 
        }
        this.setState({players: [...this.state.players, player]})
    }

    handleRandom(){
        let randomList = [...this.state.players];

        randomList = randomList.sort(() => Math.random() - 0.5);
        let teamA = randomList.slice(0, (randomList.length/2));
        let teamB = randomList.slice((randomList.length/2), randomList.length);

        this.setState({teamOne: [...teamA], teamTwo: [...teamB]});
        
    }

  render(){

    return( 
      <>
        {this.state.playersLeft > 0 ? 
            <PlayerInput 
                playersLeft={this.state.playersLeft}
                handleInput={this.handleInput}
                handleAdd={this.handleAdd}
            /> 
        :
            <h1>No players left!</h1>}

        <br/>
        <button onClick={this.handleRandom} disabled={this.state.playersLeft > 0 ? true : false}>Randomise</button>
        <button disabled={this.state.playersLeft > 0 ? true : false}>Skill Based Random</button>
      </>
    )
  }
}
export default PlayerCreator;
