import { connect } from "react-redux";
import Match from "./Match";


const mapStateToProps = (state) => {
	return {
		players: state.players,
		teams: state.teams,
	};
};

 const mapDispatchToProps = (dispatch) => {
	return{

	}	
};

export default connect(mapStateToProps, mapDispatchToProps)(Match);