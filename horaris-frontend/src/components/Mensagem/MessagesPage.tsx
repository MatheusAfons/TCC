import React from 'react';
import './MessagesPage.css'; // Importe o CSS

const MessagePage: React.FC = () => {
    const messages = [
        { id: 1, subject: 'Notificação 1', body: 'Este é o corpo da mensagem 1.' },
        { id: 2, subject: 'Notificação 2', body: 'Este é o corpo da mensagem 2.' },
        { id: 3, subject: 'Notificação 3', body: 'Este é o corpo da mensagem 3.' },
    ];

    return (
        <div className="message-container">
            <h1 className="message-title">Mensagens</h1>
            <div className="message-list">
                {messages.map((msg) => (
                    <div key={msg.id} className="message-item">
                        <h2>{msg.subject}</h2>
                        <p>{msg.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MessagePage;
