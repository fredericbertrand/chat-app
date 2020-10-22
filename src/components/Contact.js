import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
            <img src="https://randomuser.me/api/portraits/men/34.jpg" className="avatar" alt="Theodore Dunn" />
            <div >
                <h2 className="name">Theodore Dunn</h2>
                <div className="status status">
                    <span className="status-online"></span>
                    <span className="status-text">online</span>
                </div>
            </div>
        </div>


    );
}

export default Contact;