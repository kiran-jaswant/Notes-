import React from 'react';
import './Land.css';
import { Link } from 'react-router-dom';
import img2 from './note.webp'

function Land() {
  return (
    <div className='page'>
        <h1 className='heading'>Notes App</h1>
      <img src={img2} className='front-page-img'></img>
      <Link to='./home' className='link'><div className='make-notes'> Make your notes.......</div></Link>
    </div>
  )
}

export default Land
