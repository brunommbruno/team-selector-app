import { startApp } from "./state";

export const initiateApp = () => {
    return(dispatch) => {
        dispatch(startApp());
    }
}