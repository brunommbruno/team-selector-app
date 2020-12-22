import { Component } from "react";

class App extends Component {

  constructor(props){
    super(props);
  }

  render(){

    return(
      <>
        <label>Start Game</label>
        <button onClick={this.props.startApp}>click me</button>

        {this.props.appIsOn ? <h1>App is on</h1> : <h1>App is not on</h1>}



      </>
    )
  }
}
export default App;
