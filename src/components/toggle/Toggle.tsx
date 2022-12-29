import './Toggle.css';

import sunny from '../../assets/images/sunny.png';
import moon from '../../assets/images/moon.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Toggle {
    onChange?:Function;
    isDarkMode?:boolean;
}



function Toggle(props:Toggle){

   // const [darkMode,setDarkMode] = useState(props.isDarkMode || false);


   const darkMode = useSelector((state:any)=>state.darkMode);

   const dispatch = useDispatch();

    const setDarkModeOnChange = ()=>{
        if(darkMode){
            dispatch({type:'LIGHT_MODE'});
        }else{
            dispatch({type:'DARK_MODE'});
        }
        
    }

    


    return (<div className='toggle-track' onClick={setDarkModeOnChange}>
        <div className='imageHolder leftItem'><img src={moon} /></div>
        <div className='imageHolder rightItem'><img src={sunny} /></div>
        <div className={'disk ' + (darkMode?'on':'off') } tabIndex={0} ></div>
    </div>);


}


export default Toggle;