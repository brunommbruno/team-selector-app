export const startApp = ({match_id}) => {
    return {
        type: "START_APP",
        payload: {
            match_id: match_id,
        }
    };
};

export const addTeam = (team) => {
    return {
        type: "ADD_TEAM",
        payload: {
            id: team.id,
            team_name: team.team_name,
            team_color: team.team_color,
            team_kit: team.team_kit,
            score: team.score,
            match_id: team.match_id,
        },
    };
};

export const addPlayer = (player) => {
    return{
        type: "ADD_PLAYER",
        payload: {
            id: player.id,
            player_name: player.player_name,
            player_skill: player.player_skill,
            player_position: player.player_position,
            team_id: player.team_id,
            teamNum: player.teamNum,
        }
    }
}

export const changePlayerAmount = ({player_amount}) => {
    return{
        type: "CHANGE_PLAYER_AMOUNT",
        payload: {
            player_amount: player_amount,
        }
    }
}

export const editTeam = (team) => {
    return{
        type: "EDIT_TEAM",
        payload: {
            id: team.id,
            team_name: team.team_name,
            team_color: team.team_color,
            team_kit: team.team_kit,
            score: team.score,
        }
    }
}

export const resetState = () => {
    return{
        type: "RESET"
    }
}