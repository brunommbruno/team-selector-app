import App from "./App";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
	return {
		appIsOn: state.appIsOn,
	};
};

 const mapDispatchToProps = (dispatch) => {
	return{

	}	
};

export default connect(mapStateToProps, mapDispatchToProps)(App);