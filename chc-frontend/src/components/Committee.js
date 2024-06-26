
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const socialIcons = {
    facebook: faFacebookF,
    instagram: faInstagram,
    twitter: faTwitter,
    linkedin: faLinkedin,
};

const Committee = ({ member }) => {
    const { name, role, image, social } = member;

    let imgSrc;
    try {
        imgSrc = require(`../assets/images/${image}`).default;
    } catch (err) {
        console.error(`Image not found: ../assets/images/${image}`);
        imgSrc = ''; // Fallback image or handle the error
    }

    return (
        <div className="team-member">
            <img src={imgSrc} alt={name} />
            <div className="member-info">
                <h3>{name}</h3>
                <p>{role}</p>
                <div className="social-links">
                    {social.map((link, index) => (
                        <a key={index} href={link.url} title={link.name}>
                            <FontAwesomeIcon icon={socialIcons[link.name]} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Committee;

