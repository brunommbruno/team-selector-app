import { Component } from "react";
import{
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import StartScreen from "../StartScreen";
import TeamCreator from "../TeamCreator";
import PlayerCreator from "../PlayerCreator";

class App extends Component {


  render(){

    return(
      <Router>
        <>
          <Switch>
            <Route exact path="/home">
              <div className={"container"}>
                {!this.props.appIsOn ? 
                  //resets state every time /home is loaded 
                  <StartScreen /> 
                  : 
                  <TeamCreator />
                }
              </div>
            </Route>
            <Route exact path="/add-players">
              {/* PlayerCreator component requires both teams to work - only shown when this is true */}
              {this.props.teams[1] ? <PlayerCreator /> : <p onClick={this.setActive}>loading...</p>}
            </Route>
          </Switch>
        </>
      </Router>
        


    )
  }
}
export default App;
