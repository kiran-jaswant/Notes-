import React,{useState} from 'react';
import './Notes.css'
import axios from 'axios';
import {Link} from 'react-router-dom';

function Notes() {
  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');
  const [category,setCategory]=useState('');

  const addNote= async()=>{
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/Notes`,{
      title:title,
      content:content,
      category:category
    })

    alert(response.data.message)
    setTitle('');
    setCategory('');
    setContent('')
  }
  return (
    <div>
      <h1 className='head'>Notes</h1>
      <form className='form'>
      <input type='text' placeholder='Title' value={title} className='input-title' onChange={(e)=>{setTitle(e.target.value)}}></input>
      <select value={category} onChange={(e)=>{setCategory(e.target.value)}} className='input-title'>
        <option value='general'>General</option>
        <option value="work">Work</option>
        <option value='personal'>Personal</option>
        <option value='studies'>Studies</option>
        <option value='other'>Other</option>
      </select>
      <input type='text' value={content} placeholder='Content' onChange={(e)=>{setContent(e.target.value)}} className='input-content'></input>
      <button type='button' onClick={addNote} className='save'>Add Note</button>
      </form>
      <Link to='/home' className='link'><button className='see-notes'>See All Notes</button></Link>
    </div>
  )
}

export default Notes;