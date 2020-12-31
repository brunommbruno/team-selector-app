import { Component } from "react";
import{
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import StartScreen from "../StartScreen";
import TeamCreator from "../TeamCreator";
import PlayerCreator from "../PlayerCreator";
import Match from "../Match";

class App extends Component {


  render(){

    const { appIsOn, teams, players, playerAmount } = this.props;

    return(
      <Router>
        <>
          <Switch>
            <Route exact path="/home">
              <div className={"container"}>
                {!appIsOn ? 
                  //resets state every time /home is loaded 
                  <StartScreen /> 
                  : 
                  <TeamCreator />
                }
              </div>
            </Route>
            <Route exact path="/add-players">
              {/* PlayerCreator component requires both teams to work - only shown when this is true */}
              {teams[1] ? <PlayerCreator /> : <p >loading...</p>}
            </Route>
            <Route exact path="/match">
            {players[playerAmount - 1] ? <Match /> : <p >loading...</p>}
            </Route>
          </Switch>
        </>
      </Router>
        


    )
  }
}
export default App;
