import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import './assets/fonts/style.css';

import Posts from './components/posts-list/Posts';
import Post from './components/post-single/Post';



function App() {
  const [darkMode,setDarkMode]  = useState(false);

  window.store.setDarkMode = setDarkMode;
  
  useEffect(()=>{
    document.title = 'Overreacted — A blog by Dan Abramov';
     
  },[]);
  
  const getDarkModeClassName = () => {
    if(darkMode){
      return ('dark-mode');
    }else{
      return 'light-mode';
    }
  }

  return (
    <div className={'container-full ' + getDarkModeClassName()}>
      <div className='container'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={'/'} element={<Posts />} />
            <Route path={'/:post'} element={<Post />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
