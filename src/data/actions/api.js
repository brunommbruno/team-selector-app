import axios from "../../axios";
import { startApp } from "./state";

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