import { Component } from "react";

class TeamInput extends Component {

  render(){

      
    const { team, handleInput } = this.props; //eg. team = team1

    return(
        <>

            <form>
              <label>name</label>
              {/* sends value(e) and name of state property to change to handle method*/}
              {/* eg. handleInput(e, "team1_name") */}
              <input placeholder={team}onChange={(e) => handleInput(e, `${team}_name`)}></input>  

              <label for="color">color</label>
              <select id="team-color" onChange={(e) => handleInput(e, `${team}_color`)}>
                <option value="white">white</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="blue">blue</option>
              </select>   

              <label for="kit">kit</label>
              <select id="team-kit" onChange={(e) => handleInput(e, `${team}_kit`)}>
                <option value="classic">classic</option>
                <option value="striped">striped</option>
                <option value="checkers">checkers</option>
              </select>
           
            </form>

        </>
    )
  }
}
export default TeamInput;
