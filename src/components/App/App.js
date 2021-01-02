import { Component } from "react";
import{
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";

import StartScreen from "../StartScreen";
import TeamCreator from "../TeamCreator";
import PlayerCreator from "../PlayerCreator";
import Match from "../Match";

class App extends Component {


  render(){

    const { teams, players, playerAmount } = this.props;

    return(
      <HashRouter basename='/'>
        <>
          <Switch>
            <Route exact path="/">
              <div className={"container"}>
                  <StartScreen /> 
              </div>
            </Route>
            <Route exact path="/add-players">
              <div className={"container"}>
              {/* PlayerCreator component requires both teams to work - only shown when this is true */}
              {teams[1] ? <PlayerCreator /> : <p >loading...</p>}
              </div>
            </Route>
            <Route exact path="/match">
            <div className={"container"}>
            {players[playerAmount - 1] ? <Match /> : <p >loading...</p>}
            </div>
            </Route>
            <Route exact path="/team-creator">
            <div className={"container"}>
              <TeamCreator />
            </div>
            </Route>
          </Switch>
        </>
      </HashRouter>
        


    )
  }
}
export default App;
