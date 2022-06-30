
import React, { useState } from "react";
import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage"
import {storage} from "./firebase"
import { Routes, Route} from "react-router-dom";


import "./App.css";
import MediaCard from "./card.js";
import "./firebase";

function App() {
  // React States

    

  // Generate JSX code for error message
 

  // JSX code for login form
  
    return(
      <div>
      <header>
        <h1>Welcome to React Router!</h1>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="upload" element={<Upload />} />
      </Routes>
    </div>
    )
  
}
function Login(){

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errorMessages, setErrorMessages] = useState({});
  
  

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  


  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div><div>User is successfully logged in</div><MediaCard/><Upload/></div> : renderForm}

      </div>
    </div>
  );
}
function Upload(){
  const [progress,setProgress]=useState(0)

  const uploadFiles=(file)=>{
    if(!file) return;
    const storageRef=ref(storage,`/files/${file.name}`);
    const uploadTask=uploadBytesResumable(storageRef,file);
    
    uploadTask.on("state_changed",(snapshot)=>{
      const prog=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);

      setProgress(prog)
    },
    (err)=>
      console.log(err),
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((url)=>console.log(url));
      }
    );

}
  const formHandler=(e)=>{
    e.preventDefault();
    const file=e.target[0].files[0];
    console.log(file);
    uploadFiles(file)

  }
  
  return(
    <div className="App">
      <form onSubmit={formHandler}>
      <input type="file"/><button type="submit">Upload</button>
      </form>
      <hr/>
      <h3>Uploaded {progress}</h3>
    </div>
  )

}

export default App;