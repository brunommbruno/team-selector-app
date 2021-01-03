import { connect } from "react-redux";
import Match from "./Match";

import { patchTeam } from "../../data/actions/api";
import { resetState } from "../../data/actions/state";

const mapStateToProps = (state) => {
	return {
		players: state.players,
		teams: state.teams,
	};
};

 const mapDispatchToProps = (dispatch) => {
	return{
		editTeam: (team) =>  {
			dispatch(patchTeam(team));
		},
		reset: () => {
			dispatch(resetState());
		}
	}	
};

export default connect(mapStateToProps, mapDispatchToProps)(Match);