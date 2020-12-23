import { Component } from "react";

import StartScreen from "../StartScreen";
import TeamCreator from "../TeamCreator";


class App extends Component {

  render(){

    return(
      <div className={"container"}>
        {!this.props.appIsOn ? 
          <StartScreen /> 
          : 
          <TeamCreator />
        }
    
        
        


      </div>
    )
  }
}
export default App;
