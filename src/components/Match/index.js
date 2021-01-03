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
		editTeam: ({id, team_name, team_color, team_kit, score}) =>  {
			dispatch(patchTeam({id, team_name, team_color, team_kit, score}));
		},
		reset: () => {
			dispatch(resetState());
		}
	}	
};

export default connect(mapStateToProps, mapDispatchToProps)(Match);