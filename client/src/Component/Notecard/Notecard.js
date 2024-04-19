import React from 'react';
import './Notecard.css';
import bin from './bin.png';
import axios from 'axios';

function Notecard(props) {
    const {id,title,content,category,loadNotes}=props;

    const deleteNote = async () => {
      try {
          const response = await axios.delete(`${process.env.REACT_APP_API_URL}/Notes/${id}`);
          alert(response.data.message);
          loadNotes();
      } catch (error) {
         
          console.error('Error deleting note:', error);
          alert('An error occurred while deleting the note. Please try again later.');
      }
  }
  return (
    
        <div className='note-card'>
            <h1 className='title'>{title}</h1>
            <p className='content'>{content}</p>
            <h3 className='category'>{category}</h3>
            <img src={bin} alt='delete' className='delete-icon' onClick={deleteNote}></img>

        </div>
        

      
    
  )
}

export default Notecard;
