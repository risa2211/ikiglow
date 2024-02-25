import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState("");
  const [result, setResult] = useState("");
  useEffect(()=>{
    const first = ()=>{
      axios.post('http://localhost:3000/chat', {
        message: "You're speaking with someone who is seeking support for their mental health. They may be feeling overwhelmed, anxious, or experiencing other difficulties. It's important to create a safe and understanding environment for them. Listen attentively to their concerns, validate their emotions, and offer support and resources tailored to their needs. Remember to maintain a non-judgmental attitude and encourage open communication. Your goal is to provide comfort, understanding, and guidance to help them navigate their challenges. Begin the conversation with a compassionate greeting and invite them to share what's on their mind."
      }).then((res) => {
        setResult(res.data.data[0].content.parts[0].text)
        console.log(res.data.data[0].content.parts[0].text);
      }).catch((error) => {
        console.error("There was an error!", error);
      });

    }
    first()
  },[])

  const handleSubmit = () => {
    axios.post('http://localhost:3000/chat', {
      message: count
    }).then((res) => {
      setResult(res.data.data[0].content.parts[0].text)
      console.log(res.data.data[0].content.parts[0].text);
    }).catch((error) => {
      console.error("There was an error!", error);
    });
  };

  return (
    <>
      <div>
        <h1>Gemini Chatbot</h1>
        <input 
          type="text" 
          id="userInput" 
          value={count} 
          onChange={(e) => setCount(e.target.value)} 
          placeholder="Say something..."
        />
        {/* Corrected onClick event handler */}
        <button onClick={handleSubmit}>Send</button>
        <div id="response">
          <h3>{result}</h3>
        </div>
      </div>
    </>
  );
}

export default App;
