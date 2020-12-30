import { connect } from "react-redux";
import TeamCreator from "./TeamCreator";

import { postTeam } from "../../data/actions/api";
import { changePlayerAmount } from "../../data/actions/state";


const mapStateToProps = (state) => {
	return {
		match_id: state.match_id,
	};
};

 const mapDispatchToProps = (dispatch) => {
	return{
		addTeam: (team_name, team_color, team_kit, match_id) => {
			//sends parameters to create post request to api method
			dispatch(postTeam(team_name, team_color, team_kit, match_id));
		},
		addPlayerAmount: ({player_amount}) => {
			dispatch(changePlayerAmount({player_amount}));
		}
	}	
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamCreator);