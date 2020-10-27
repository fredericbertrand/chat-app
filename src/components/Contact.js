import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Contact.css';

function Contact(props) {
    const [connexion, setConnexion] = useState(props.online)

    return (
        <div className="Contact">
            <img src={props.avatar} className="avatar" alt={props.name} />
            <div >
                <h2 className="name">{props.name}</h2>
                <div className="status">
                    <button>
                        <span onClick={() => { setConnexion(!connexion) }} className={connexion ? "status-online" : "status-offline"}></span>
                        <span onClick={() => { setConnexion(!connexion) }} className="status-text">{connexion ? "online" : "offline"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};

export default Contact;