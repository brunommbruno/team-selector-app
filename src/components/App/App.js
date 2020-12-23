import { Component } from "react";
import{
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import StartScreen from "../StartScreen";
import TeamCreator from "../TeamCreator";


class App extends Component {

  render(){

    return(
      <Router>
        <>
          <Switch>
            <Route exact path="/">
              <div className={"container"}>
                {!this.props.appIsOn ? 
                  <StartScreen /> 
                  : 
                  <TeamCreator />
                }
              </div>
            </Route>
          </Switch>
        </>
      </Router>
        


    )
  }
}
export default App;
