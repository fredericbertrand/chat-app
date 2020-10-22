import React from 'react';
import './Contact.css';

function Contact(characters) {
    return (
        <div className="Contact">
            <img src={characters.avatar} className="avatar" alt={characters.name} />
            <div >
                <h2 className="name">{characters.name}</h2>
                <div className="status">
                    <span className={characters.online ? "status-online" : "status-offline"}></span>
                    <span className="status-text">{characters.online ? "online" : "offline"}</span>
                </div>
            </div>
        </div>


    );
}

export default Contact;