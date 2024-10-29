import "./App.css";
import { useState } from "react";

function App() {
const [inputUser,setInputUser] = useState("")  //// เพื่อรับข้อมูล onchange 
const [message,setMessage] = useState("Greeting")  /// เพื่อโชว์เมื่อคลิก 

/// set input ก่อน เพื่อให้ ใช้ในปุ่ม summit ได้
/// ดูว่า button click จะสามารถส่งข้อมูลอะไรไปได้บ้าง และตัวไหนเป็นตัวโชว์ข้อมูล 
  const handleMessage = () => {
    setMessage(inputUser)
  }


  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input 
        id="greeting-message" 
        type="text" 
        value={inputUser}
        onChange={(event) => setInputUser(event.target.value)}
        />
      </div>

      <div className="buttons">
        {/* <button onClick={()=>setMessage(inputUser)}>Update text</button> */}
        <button onClick={handleMessage}>Update text </button>
      </div>
    </div>
  );
}

export default App;
