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
              {this.props.teams[1] ? <PlayerCreator /> : <p onClick={this.setActive}>loading...</p>}
            </Route>
          </Switch>
        </>
      </Router>
        


    )
  }
}
export default App;
