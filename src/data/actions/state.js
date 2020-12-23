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