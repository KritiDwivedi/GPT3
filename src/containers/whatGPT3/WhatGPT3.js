import React from 'react'
import './whatGPT3.css';
import {Features} from '../../components';
export default function WhatGPT3(){
    return(<div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
    <div className='gpt3__whatgpt3-feature'>
{/* Now for the heading "What is gpt3...we are making a separate componenet because we need the same
kind of heading everywhere along with the line on top of it." */}
<Features title={'What is GPT-3'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'}/>
</div>
    <div className='gpt3__whatgpt3-heading'>
<h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
<p>Explore The Library</p>
    
    </div>
    <div className='gpt3__whatgpt3-container'>
    <Features title={'Chatbots'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '}/>
    <Features title={'Knowledgebase'} text={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'}/>
    <Features title={'Education'} text={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'}/> 
    </div>
    </div>)
}
