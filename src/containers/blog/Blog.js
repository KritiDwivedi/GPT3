import React from 'react';
import './blog.css';
import {Article} from '../../components';
import {blog01,blog02,blog03,blog04,blog05} from './import';
import { RiMarkdownFill } from 'react-icons/ri';

export default function  Blog(){
    return(<div className="gpt3__blog section__padding" id='blog'>
    
    <div className='gpt3__blog-heading'>
    <h1 className='gradient__text'>
        A lot is happening.We are blogging about it.
    </h1></div>
<div className='gpt3__blog-container'>

<div className='gpt3__blog-container_groupA'>
<Article imgURL={blog01}  date={"13Mar,2024"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>

</div>
<div className='gpt3__blog-container_groupB'>
<Article imgURL={blog02} date={"13Mar,2024"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
<Article imgURL={blog03} date={"13Mar,2024"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
<Article imgURL={blog04}  date={"13Mar,2024"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
<Article imgURL={blog05} date={"13Mar,2024"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>

</div>




</div>
    
    
   </div>)
}