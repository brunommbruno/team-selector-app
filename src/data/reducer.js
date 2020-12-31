const reducer = (state, action) => {
    switch(action.type){
        case "START_APP":
            return {
                ...state,   //creates copy of state and applies new values
                appIsOn: true,
                match_id: action.payload.match_id,
            };
        
        case "ADD_TEAM":
            return {
                ...state, //creates copy of state and applies new values
                teams: [...state.teams, action.payload], //payload: object passed from state.js method
            }
        
        case "ADD_PLAYER":
            return{
                ...state,
                players: [...state.players, action.payload], 
            }
        
        case "CHANGE_PLAYER_AMOUNT":
            return{
                ...state,
                player_amount: action.payload.player_amount,
            }

        default:
			return state;
    }

};

export default reducer;