import { initialState } from "..";

interface Action {
    type:string;
    payload?:{
        darkMode?:boolean
    }
}


export default function reducer(state=initialState,action:Action) {

    switch (action.type){
        case 'DARK_MODE':
            window.localStorage.setItem('dark_mode','true')
            return {darkMode:true}
        case 'LIGHT_MODE':
            window.localStorage.removeItem('dark_mode')
            return {darkMode:false}
        default:
            return state
    }

}