import initial from "./initial";

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
                ...state, 
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

        case "EDIT_TEAM":
            return{
                ...state,
                teams: state.teams.map((team) => {
                    if (team.id !== action.payload.id) {
                        return team;
                    } else {
                        return{
                            ...team,
                            ...action.payload,
                        }
                    }
                })
            }

        case "RESET": return initial;

        default:
			return state;
    }

};

export default reducer;