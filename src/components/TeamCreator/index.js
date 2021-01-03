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
		addTeam: (team) => {
			//sends parameters to create post request to api method
			dispatch(postTeam(team));
		},
		addPlayerAmount: ({player_amount}) => {
			dispatch(changePlayerAmount({player_amount}));
		}
	}	
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamCreator);