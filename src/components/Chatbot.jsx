import React from 'react';
import ChatbotIcon from '../images/Chatbot Icon.png';
import "./Chatbot.css";

const Chatbot = (props) => {

  function hasClicked(){
    props.onClick();
  }

  return (
    <div className='chatBotIcon-container'>
        <img onClick={hasClicked} className='chatBotIcon' src={ChatbotIcon} alt="Chatbot Icon"></img>
    </div>
  )
}

export default Chatbot;
