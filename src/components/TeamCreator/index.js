import { connect } from "react-redux";
import TeamCreator from "./TeamCreator";

import { postTeam } from "../../data/actions/api";


const mapStateToProps = (state) => {
	return {
		match_id: state.match_id,
	};
};

 const mapDispatchToProps = (dispatch) => {
	return{
		addTeam: (team_name, team_color, team_kit, match_id) => {
			//changes app state to true, posts a match and returns id to state
			dispatch(postTeam(team_name, team_color, team_kit, match_id));
		}
	}	
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamCreator);