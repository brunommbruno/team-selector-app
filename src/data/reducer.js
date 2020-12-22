const reducer = (state, action) => {
    switch(action.type){
        case "START_APP":
            return {
                ...state,
                appIsOn: true,
            };

        default:
			return state;
    }

};

export default reducer;