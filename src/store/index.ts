import { createStore,Store } from "redux";
import reducer from "./reducer";

const initialState = {
    darkMode:window.localStorage.getItem('dark_mode')==='true'?true:false
}

const store:Store = createStore(reducer,initialState);


export {initialState};
export default store;
