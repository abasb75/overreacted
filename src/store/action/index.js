
export function lightMode(){
    return {
        type:'DARK_MODE',
        payload:{
            darkMode:true
        }
    }
}

export function darkMode(){
    return {
        type:'LIGHT_MODE',
        payload:{
            darkMode:false
        }
    }
}