import { connect } from "react-redux";
import PlayerCreator from "./PlayerCreator";

import { postPlayer } from "../../data/actions/api";


const mapStateToProps = (state) => {
	return {
		teamOneId: state.teams[0].id,
		teamTwoId: state.teams[1].id,
		//controls the amount of players the user can input
		player_amount: state.player_amount,
		teams: state.teams,

	};
};

 const mapDispatchToProps = (dispatch) => {
	return{
		//sends parameters to create post request to api method
		addPlayer: (player_name, player_skill, player_position, teamId, teamNum) => {
			dispatch(postPlayer(player_name, player_skill, player_position, teamId, teamNum));
		}
	}	
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCreator);