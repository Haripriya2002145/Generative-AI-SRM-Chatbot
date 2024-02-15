import { React, useState } from 'react';
import "./ChatbotContainer.css";
import logo from "../images/Chatbot Icon.png";
import { Avatar, CrossIcon, SendMessageIcon } from 'evergreen-ui';
import axios from 'axios';

const ChatbotContainer = (props) => {

    const [chatMessages, setChatMessages] = useState([]);
    const [isEmpty, setIsEmpty] = useState(true);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function close() {
        props.onClick();
    }

    function handleInputChange(e) {
        const user = e.target.value;
        if (user.length === 0) {
            setIsEmpty(true);
        }
        else {
            setIsEmpty(false);
        }
        setQuery(user);
    }

    async function handleOnClick(e) {

        if (query !== "") {
            const newMessage = {
                user: true,
                message: query
            }

            setChatMessages(prevMessages => (
                [...prevMessages, newMessage]
            ));

            try {
                const response = await axios.post('http://localhost:3000/chatbot', { message: query });
                const botResponse = (response.data.response);

                // Simulate a delay before showing the bot response
                setTimeout(() => {
                    setIsLoading(false);
                }, 10000); // Adjust the delay time as needed, in milliseconds

                //getting bot response
                const botMessage = {
                    user: false,
                    message: botResponse
                };

                setChatMessages(prevMessages => (
                    [...prevMessages, botMessage]
                ));
            } catch (error) {
                console.error('Error:', error);
                setIsLoading(false);
            }

            //Clearing the input area after submitting the query
            setQuery("");
            setIsEmpty(true);
        }
        // e.preventDefault();
    }

    return (
        <div className='chat-area'>
            <div className='chatlogo-container'>

                <Avatar marginRight="1.5rem" marginLeft="1.5rem" src={logo} size={60} />

                <div className='chat-text'>
                    <span className='chatbot-name' marginBottom="0.5rem">SRMbot</span>
                    <span className='online'>Online</span>
                </div>

                <CrossIcon className='close-icon' onClick={close} marginBottom="3em" justifySelf="flex-end" color="muted" size={25} />
            </div>

            <div className='message-container'>
                <div className='message-text bot'>
                    <p>Hi, it's great to see you! 👋</p>
                </div>
                <div className='message-text bot'>
                    <p>What can I help you with today?</p>
                </div>
                {
                    chatMessages.map((message, index) => {
                        return (
                            <div index={index} key={index} className={(message.user?'message-text user':'message-text bot')}>
                                <p className='p-tag'>{message.message}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className='input-area'>
                <input
                    name="input"
                    value={query}
                    placeholder='Type your message here'
                    className='input'
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleOnClick()
                        }
                    }}
                    onChange={handleInputChange}>
                </input>
                <SendMessageIcon onClick={handleOnClick} size={25} className='send-icon' color={isEmpty ? "disabled" : "info"} />
            </div>
        </div>
    )
}

export default ChatbotContainer;
