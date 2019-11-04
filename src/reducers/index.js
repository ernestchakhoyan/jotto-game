import {combineReducers} from "redux";
import success from "./successReducer";
import guessedWord from "./guessedWordReducer";
import secretWord from "./secretWordReducer";


export default combineReducers({
    success,
    guessedWord,
    secretWord
})