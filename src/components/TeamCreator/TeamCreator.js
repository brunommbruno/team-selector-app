import { Component } from "react";

class TeamCreator extends Component {

  constructor(props){
    super(props);

    this.state = {
      team_name: "",
      team_color: "",
      team_kit: "",
    }

    this.handleTeamName = this.handleTeamName.bind(this);
    this.handleTeamColor = this.handleTeamColor.bind(this);
    this.handleTeamKit = this.handleTeamKit.bind(this);

  }

  handleTeamName(e){
    this.setState({ team_name: e.currentTarget.value });
  }

  handleTeamColor(e){
    this.setState({ team_color: e.currentTarget.value });
  }

  handleTeamKit(e){
    this.setState({ team_kit: e.currentTarget.value });
  }


  render(){

    return(
        <>
            <h1 className={"text-center mt-4"}>Team Creation</h1>

            <form>
              <h2>Team One</h2>
              <label>name</label>
              <input onChange={this.handleTeamName}></input>

              <label for="color">color</label>
              <select id="team-color" onChange={this.handleTeamColor}>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="blue">blue</option>
              </select>   

              <label for="kit">kit</label>
              <select id="team-kit" onChange={this.handleTeamKit}>
                <option value="classic">classic</option>
                <option value="striped">striped</option>
                <option value="checkers">checkers</option>
              </select>
           
            </form>

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
