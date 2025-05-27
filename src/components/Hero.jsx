import React from 'react';
import profile from '../assets/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-center text-white py-40"
      style={{ backgroundImage: `url(${profile})` }}
    >
      <div className="p-8 rounded-md inline-block">
        <h2 className="text-4xl font-bold">Hi, I'm Karol John Paras</h2>
        <p className="text-lg mt-4">Backend Developer • NestJS Enthusiast</p>
      </div>
      <div>
        <a href="https://github.com/lolek2024" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon 
            icon={faGithub} 
            className="text-4xl mx-2 hover:text-gray-400 cursor-pointer" 
        />
        </a>

        <FontAwesomeIcon icon={faLinkedin} className="text-4xl mx-2 hover:text-gray-400 cursor-pointer" />
        <FontAwesomeIcon icon={faDiscord} className="text-4xl mx-2 hover:text-gray-400 cursor-pointer" />

        <a href="https://github.com/lolek2024" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon 
            icon={faFacebook} 
            className="text-4xl mx-2 hover:text-gray-400 cursor-pointer" 
        />
        </a>
       
        </div>
    </section>
  );
}
