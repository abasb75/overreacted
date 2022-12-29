import { createStore } from "redux";
import reducer from "./reducer";

const initialState = {
    darkMode:window.localStorage.getItem('dark_mode')==='true'?true:false
}

console.log(initialState)

const store = createStore(reducer,initialState);


export {initialState};
export default store;