import React, { useState } from 'react';
import openai from './open-ai';
import "./Chat.css";

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMessage = { sender: 'user', content: input };
        setMessages([...messages, userMessage]);
        try {
            setInput('');
            const completion = await openai.chat.completions.create({
                messages: [
                    { role: 'system', content: 'You are a data analysis assistant.' },
                    ...messages.map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.content })),
                    { role: 'user', content: input },
                ],
                model: 'gpt-3.5-turbo',
            });
            const botMessage = { sender: 'bot', content: completion.choices[0].message.content };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error fetching response:', error);
            const botMessage = { sender: 'bot', content: 'Sorry, there was an error processing your request.' };
            setMessages([...messages, userMessage, botMessage]);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">Data Insights Chat</div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender}`}>
                        <strong>{msg.sender === 'user' ? 'You' : 'Bot'}: </strong>{msg.content}
                    </div>
                ))}
            </div>
            <div className="chat-input-container">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about the above table..."
                    className="chat-input"
                />
                <button onClick={handleSend} className="chat-button">Send</button>
            </div>
        </div>
    );
};

export default ChatApp;
