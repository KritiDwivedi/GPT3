import React from 'react';
import './features.css';

function Feature({title,text}){
    return(<div className='gpt3__features-container__feature'>
    <div className='gpt3__features-container___feature-title'>
    {/* EMPTY DIV FOR THE COLORFUL LINE */}
    <div/>
    <h1>{title}</h1></div>
    <div className='gpt3__features-container_feature-text'>

       <p> {text}</p>
    </div>
    </div>)
}
export default Feature;