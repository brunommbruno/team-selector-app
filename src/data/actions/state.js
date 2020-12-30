export const startApp = ({match_id}) => {
    return {
        type: "START_APP",
        payload: {
            match_id: match_id,
        }
    };
};

export const addTeam = ({id, team_name, team_color, team_kit, score, match_id}) => {
    return {
        type: "ADD_TEAM",
        payload: {
            id: id,
            team_name: team_name,
            team_color: team_color,
            team_kit: team_kit,
            score: score,
            match_id: match_id,
        },
    };
};

export const addPlayer = ({id, player_name, player_skill, player_position, team_id}) => {
    return{
        type: "ADD_PLAYER",
        payload: {
            id: id,
            player_name: player_name,
            player_skill: player_skill,
            player_position: player_position,
            team_id: team_id,
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