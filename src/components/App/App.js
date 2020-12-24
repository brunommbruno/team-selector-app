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
                  <StartScreen /> 
                  : 
                  <TeamCreator />
                }
              </div>
            </Route>
            <Route exatt path="/add-players">
              <PlayerCreator />
            </Route>
          </Switch>
        </>
      </Router>
        


    )
  }
}
export default App;
