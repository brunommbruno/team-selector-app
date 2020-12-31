import App from "./App";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
	return {
		appIsOn: state.appIsOn,
		teams: state.teams,
		players: state.players,
		playerAmount: state.player_amount,
	};
};

 const mapDispatchToProps = (dispatch) => {
	return{

	}	
};

export default connect(mapStateToProps, mapDispatchToProps)(App);