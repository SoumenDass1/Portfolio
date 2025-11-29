import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, ExternalLink, FileText } from 'lucide-react';
import Resume from './Resume';
import './Hero.css';

const Hero = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <>
            <section id="home" className="hero">
                <div className="container hero-container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="greeting">Hello, I'm</span>
                        <h1 className="name">Soumen Dass</h1>
                        <h2 className="role">Aspiring Frontend Developer</h2>
                        <p className="description">
                            Passionate about crafting user-friendly interfaces and building innovative web experiences.
                        </p>

                        <div className="hero-buttons">
                            <button onClick={() => setIsResumeOpen(true)} className="btn">
                                <FileText size={18} /> View Resume
                            </button>
                            <a href="#projects" className="btn btn-outline">View My Work</a>
                            <a href="#contact" className="btn btn-outline">Contact Me</a>
                        </div>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/soumen-dass-a69b94317/" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                            <a href="https://github.com/SoumenDass1" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
                            <a href="https://leetcode.com/u/Soumen_Dass001/" target="_blank" rel="noopener noreferrer"><Code size={24} /></a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="image-wrapper">
                            <img src="/profile.png" alt="Soumen Dass" className="profile-image" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </>
    );
};

export default Hero;
