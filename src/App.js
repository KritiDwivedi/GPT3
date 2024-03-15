import React from 'react';
// SEE HOW CLEAN THIS CODE BECOMES ON IMPORTING EVERYTHING INSIDE INDEX.JS
import {Footer,Blog,Poss,WhatGPT3,Header,Feat} from './containers';
import {Article,Brand,Cta,Navbar} from './components';
import './App.css'
// npm start to START THE APPLICATION
export const App = () => {
  return (
    
      <div className='App'>
<div className='gradient__bg'>
<Navbar/>
<Header/>

</div>
<Brand/>
<WhatGPT3/>
<Feat/>
<Poss/>
<Cta/>
<Blog/>
<Footer/>





      </div>
    
  )
}
export default App;
