import axios from "../../axios";
import { startApp, addTeam } from "./state";

export const initiateApp = () => {
    return(dispatch) => {
        axios
        //creates a new match model in the api and returns its id
            .post("/matches", {
                //no inputs needed
            })
            .then(({ data }) => {
                dispatch(
                    //sends id to reducer to change state variable that contains match id
                    //changes appIsOn state to true
                    startApp({
                    match_id: data.data.id,
                    })
                );
            });
    }
}

export const postTeam = ({team_name, team_color, team_kit, match_id}) => {
    return (dispatch) => {
        axios.post(`matches/${match_id}/teams`, {
                team_name: team_name,
                team_color: team_color,
                team_kit: team_kit,
            }).then(({ data }) => {
                dispatch(
                    addTeam({
                        id: data.data.id,
                        team_name: data.data.team_name,
                        team_color: data.data.team_color,
                        team_kit: data.data.team_kit,
                        score: data.data.score,
                        match_id: data.data.match_id,
                    })
                )
            });
    };
};