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
                players: [...state.players, action.payload]
            }


        default:
			return state;
    }

};

export default reducer;