import { connect } from "react-redux";
import PlayerCreator from "./PlayerCreator";

import { postPlayer } from "../../data/actions/api";


const mapStateToProps = (state) => {
	return {
		teamOneId: state.teams[0].id,
		teamTwoId: state.teams[1].id,

	};
};

 const mapDispatchToProps = (dispatch) => {
	return{
		addPlayer: (player_name, player_skill, player_position, teamId) => {
			dispatch(postPlayer(player_name, player_skill, player_position, teamId));
		}
	}	
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCreator);