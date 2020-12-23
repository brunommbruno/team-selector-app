import StartScreen from "./StartScreen";
import { connect } from "react-redux";

import { initiateApp } from "../../data/actions/api";

const mapStateToProps = (state) => {
	return {
        //allows component to access state values
		appIsOn: state.appIsOn, 
	};
};

 const mapDispatchToProps = (dispatch) => {
	return{
		startApp: () => {
			//changes app state to true, posts a match and returns id to state
			dispatch(initiateApp());
		}
	}	
};

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);