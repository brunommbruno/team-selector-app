import { connect } from "react-redux";
import PlayerCreator from "./PlayerCreator";



const mapStateToProps = (state) => {
	return {
		playerAmount: state.playerAmount,
	};
};

 const mapDispatchToProps = (dispatch) => {
	return{
	}	
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCreator);