import { React, useState } from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Chatbot from "./components/Chatbot";
import ChatbotContainer from './components/ChatbotContainer';

function App() {

  const [chatting, setChatting] = useState(false);

  function hasClickedChatbotIcon() {
    setChatting(!chatting);
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      {
        (chatting === true) ? (
          <ChatbotContainer onClick={hasClickedChatbotIcon} />
        )
          :
          (
            <Chatbot onClick={hasClickedChatbotIcon} />
          )
      }

    </div>
  );
}

export default App;
