import { Component } from "react";

class PlayerInput extends Component {

  render(){

    const {handleInput} = this.props;

    return(
        <>
            <p>players left: {this.props.playersLeft}</p>
            <form>
                <label>Name</label>
                <input onChange={(e) => handleInput(e, "player_name")}></input>

                <label>skill</label>
                <input onChange={(e) => handleInput(e, "player_skill")}></input>

                <label>position</label>
                <input onChange={(e) => handleInput(e, "player_position")}></input>
            </form>

            <button onClick={this.props.handleAdd}>add</button>


        </>
    )
  }
}
export default PlayerInput;
