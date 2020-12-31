import { Component } from "react";
import TeamInput from "../TeamInput";
import { Link } from "react-router-dom";

class TeamCreator extends Component {


  constructor(props){
    super(props);

    this.state = {
      teamOne_name: "team one",
      teamOne_color: "white",
      teamOne_kit: "classic",

      teamTwo_name: "team two",
      teamTwo_color: "white",
      teamTwo_kit: "classic",

      player_amount: 5,
    }

    this.handleInput = this.handleInput.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  //receives name parameter which handles which state to change
  handleInput(e, name){
    let obj = {};
    obj[name] = e.currentTarget.value;
    this.setState(obj)
  }

  handlePost() {
    //posts team 1 to api and adds onto state
    this.props.addTeam({
      team_name: this.state.teamOne_name,
      team_color: this.state.teamTwo_color,
      team_kit: this.state.teamOne_kit,
      match_id: this.props.match_id,
    });
    //posts team 2 to api and adds onto state
    this.props.addTeam({
      team_name: this.state.teamTwo_name,
      team_color: this.state.teamTwo_color,
      team_kit: this.state.teamTwo_kit,
      match_id: this.props.match_id,
    });

    this.props.addPlayerAmount({
      player_amount: (this.state.player_amount * 2),
    })
  }


  render(){


    return(
        <>
            <h1 className={"text-center mt-4"}>Team Creation</h1>

            <h2>Team One</h2>

            {/* Includes name,color,kit inputs for each team*/}
            <TeamInput 
              //handleInput prop allows component to access local state method
              handleInput={this.handleInput} 
              team="teamOne"
            />

            <h2>Team Two</h2>
            <TeamInput 
              handleInput={this.handleInput}
              team="teamTwo"
            />

            <label for="player-amount">Players per team</label>  
              <select id="player-amount" onChange={(e) => this.handleInput(e, "player_amount")}>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
              </select>

              <button onClick={this.handlePost}><Link to="/add-players">Create Teams!</Link></button>


          
        </>
    )
  }
}
export default TeamCreator;
