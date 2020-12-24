import { Component } from "react";
import PlayerInput from "../PlayerInput";

class PlayerCreator extends Component {

    constructor(props){
        super(props);

        this.state = {
            player_name: "name",
            player_skill: 1,
            player_position: "fr",

            playersLeft: 0,
        }

        this.decrementPlayerAmount = this.decrementPlayerAmount.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    componentDidMount(){
        this.setState({playersLeft: this.props.playerAmount})
    }

    decrementPlayerAmount(){
        this.setState({playersLeft: this.state.playersLeft -1})
    }

    handleInput(e, name){
        let obj = {};
        obj[name] = e.currentTarget.value;
        this.setState(obj)
    }

    handlePost(){
        
    }

  render(){

    return( 
      <>
        {this.state.playersLeft > 0 ? 
            <PlayerInput 
                playersLeft={this.state.playersLeft}
                handleDecrement={this.decrementPlayerAmount}
                handleInput={this.handleInput}
            /> 
        :
            <h1>No players left!</h1>}

        <br/>
        <button disabled={this.state.playersLeft > 0 ? true : false}>Randomise</button>
      </>
    )
  }
}
export default PlayerCreator;
