import { useState, useRef, useEffect } from 'react'
import React from "react";
import './App.css'
import API from "./services/API/api.js"
import Header from './components/Header.jsx';
import Body from './components/Body';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Footer from './components/Footer';
function Button1(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Get File Link!

      </Button>
      <br />
      <br />
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
             <a href={props.link}>{props.link}</a>
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}


function App() {

  const fileInputRef = useRef(null);

  const [file, setFile] = useState('');
  const [link, setLink] = useState('');
  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  useEffect(() => {

    async function getImage() {

      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const result = await API(data);
        console.log(result)
        setLink(result.path)
      }
    }

    getImage();
  }, [file])//call the api whenever the file changes!

  console.log(file);

  return (
    <>
      <Header />
      <center>
        <Body />
        
        <Button onClick={() => {
          onUploadClick()
        }} variant="dark">Select File</Button>
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
        {/* <a href={link} >{link}</a> */}
        <br />
        <br />
        {link && 
          <Button1 link={link}>Click</Button1>
        }
      </center>
      <Footer/>
    </>
  )
}

export default App
