import axios from "../../axios";
import { startApp, addTeam, addPlayer, editTeam } from "./state";

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

export const postTeam = (team) => {
    return (dispatch) => {
        //creates a new team model in the api and returns it
        axios.post(`matches/${team.match_id}/teams`, {
                team_name: team.team_name,
                team_color: team.team_color,
                team_kit: team.team_kit,
            }).then(({ data }) => {
                dispatch(
                    //adds returned values to state
                    addTeam({
                        id: data.data.id,
                        team_name: data.data.team_name,
                        team_color: data.data.team_color,
                        team_kit: data.data.team_kit,
                        score: 0,
                        match_id: data.data.match_id,
                    })
                )
            });
    };
};

export const postPlayer = (player) => {
    return(dispatch) => {
    axios.post(`teams/${player.teamId}/players`, {
        player_name: player.player_name,
        player_skill: player.player_skill,
        player_position: player.player_position,
    }).then(({ data }) =>{
        dispatch(
            addPlayer({
                id: data.data.id,
                player_name: data.data.player_name,
                player_skill: data.data.player_skill,
                player_position: data.data.player_position,
                team_id: data.data.team_id,
                teamNum: player.teamNum,
            })
        )
    });
    };
};

export const patchTeam = (team) => {
    return(dispatch) => {
        axios.patch(`teams/${team.id}`, {
            team_name: team.team_name,
            team_color: team.team_color,
            team_kit: team.team_kit,
            score: team.score ,
        }).then(({ data }) => {
            dispatch(
                editTeam({
                    id: team.id,
                    score: data.data.score,
                    team_color: data.data.team_color,
                    team_name: data.data.team_name,
                    team_kit: data.data.team_kit,
                })
            )
        })
    }
}