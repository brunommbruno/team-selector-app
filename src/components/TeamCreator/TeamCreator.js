import { Component } from "react";
import TeamInput from "../TeamInput";

class TeamCreator extends Component {


  constructor(props){
    super(props);

    this.state = {
      teamOne_name: "team one",
      teamOne_color: "white",
      teamOne_kit: "classic",

      teamTwo_name: "team two",
      teamTwo_color: "white",
      teamTwo_kit: "classic"
    }

    this.handleInput = this.handleInput.bind(this);

  }

  //receives name parameter which handles which state to change
  handleInput(e, name){
    let obj = {};
    obj[name] = e.currentTarget.value;
    this.setState(obj)
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

            <label for="cars">Players per team</label>
              <select id="player-amount">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
              </select>
        </>
    )
  }
}
export default TeamCreator;
