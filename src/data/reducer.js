const reducer = (state, action) => {
    switch(action.type){
        case "START_APP":
            return {
                ...state,   //creates copy of state and applies new values
                appIsOn: true,
                match_id: action.payload.match_id,
            };

        default:
			return state;
    }

};

export default reducer;