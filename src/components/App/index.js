import App from "./App";
import { connect } from "react-redux";

import { initiateApp } from "../../data/actions/api";

const mapStateToProps = (state) => {
	return {
		appIsOn: state.appIsOn,
	};
};

 const mapDispatchToProps = (dispatch) => {
	return{
		startApp: () => {
			dispatch(initiateApp());
		}
	}	
};

export default connect(mapStateToProps, mapDispatchToProps)(App);