import { Component } from "react";

import StartScreen from "../StartScreen"


class App extends Component {

  render(){

    return(
      <div className={"container"}>
        {!this.props.appIsOn ? 
          <StartScreen /> 
          : 
          <h1>App Started</h1>
        }
    
        
        


      </div>
    )
  }
}
export default App;
