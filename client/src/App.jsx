import { useState, useRef ,useEffect} from 'react'
import React from "react";
import './App.css'
import API from "./services/API/api.js"

function App() {

  const fileInputRef = useRef(null);

  const [file, setFile] = useState('');
  const [link,setLink] = useState('');
  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  useEffect(()=>{

    async function getImage() {

      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);
        const result = await API(data);
        console.log(result)
        setLink(result.path)
      }
    }

    getImage();
  },[file])//call the api whenever the file changes!
  
  console.log(file);

  return (
    <>
      <center>


        <h1>Share.NET</h1>

        <button onClick={() => {
          onUploadClick()
        }}>Upload</button>
        <input
          ref={fileInputRef}
          type="file"
          style={{
            display: 'none'
          }}
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
      <a href={link} >{link}</a>
      </center>
    </>
  )
}

export default App
