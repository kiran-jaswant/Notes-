import React ,{useState,useEffect}from 'react';
import './Home.css';
import axios from 'axios';
import Notecard from '../../Component/Notecard/Notecard';
import { Link } from 'react-router-dom';

function Home() {
const [notes,setNotes]=useState([]);

const loadNotes= async()=>{
    const respose= await axios.get(`${process.env.REACT_APP_API_URL}/Notes`);

    setNotes( respose.data.data);

}
useEffect(()=>{loadNotes();},[])


  return (
    <div>
      <h1 className='app-heading'>Notes App</h1>
      <div className='notes-container'>
      {
        notes.map((note,index)=>{
            const{_id,title,content,category}=note;
            return (
                <div index={index}>
                    <Notecard  id={_id} title={title} content={content} category={category} loadNotes={loadNotes}></Notecard>
                </div>
        )
        })
      }
      </div>
      <Link to='/newnote'><button className='Add-notes'>Add More Notes</button></Link>
    </div>
  )
}

export default Home;
