export const startApp = ({match_id}) => {
    return {
        type: "START_APP",
        payload: {
            match_id: match_id,
        }
    };
};