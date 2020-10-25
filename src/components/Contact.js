import React from 'react';
import PropTypes from 'prop-types';

import './Contact.css';

function Contact(props) {
    return (
        <div className="Contact">
            <img src={props.avatar} className="avatar" alt={props.name} />
            <div >
                <h2 className="name">{props.name}</h2>
                <div className="status">
                    <span className={props.online ? "status-online" : "status-offline"}></span>
                    <span className="status-text">{props.online ? "online" : "offline"}</span>
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