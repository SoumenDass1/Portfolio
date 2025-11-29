import React from 'react';
import { motion } from 'framer-motion';
import { X, Download, Mail, Phone, MapPin, Linkedin, Github, Code } from 'lucide-react';
import './Resume.css';

const Resume = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            className="resume-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="resume-container"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-btn" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="resume-content">
                    {/* Header */}
                    <header className="resume-header">
                        <h1>Soumen Dass</h1>
                        <h2>Aspiring Frontend Developer</h2>
                        <div className="contact-info">
                            <span><Phone size={14} /> +91 8882241153</span>
                            <span><Mail size={14} /> soumen.dass2024@nst.rishihood.edu.in</span>
                            <span><MapPin size={14} /> Sonipat, Haryana, India</span>
                        </div>
                        <div className="social-links-resume">
                            <a href="https://www.linkedin.com/in/soumen-dass-a69b94317/" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={14} /> LinkedIn
                            </a>
                            <a href="https://github.com/SoumenDass1" target="_blank" rel="noopener noreferrer">
                                <Github size={14} /> GitHub
                            </a>
                            <a href="https://codeforces.com/profile/Soumen_Dass" target="_blank" rel="noopener noreferrer">
                                <Code size={14} /> Codeforces
                            </a>
                            <a href="https://leetcode.com/u/Soumen_Dass001/" target="_blank" rel="noopener noreferrer">
                                <Code size={14} /> LeetCode
                            </a>
                        </div>
                    </header>

                    {/* Professional Summary */}
                    <section className="resume-section">
                        <h3 className="section-heading">Professional Summary</h3>
                        <p>
                            Aspiring Frontend Developer passionate about crafting user-friendly interfaces and building innovative web experiences.
                            With a strong foundation in HTML, CSS, and JavaScript, along with modern frameworks like React, I enjoy turning complex
                            ideas into elegant, responsive, and interactive web solutions. Constantly learning and building projects that solve
                            real-world problems while providing an exceptional user experience.
                        </p>
                    </section>

                    {/* Education */}
                    <section className="resume-section">
                        <h3 className="section-heading">Education</h3>

                        <div className="resume-item">
                            <div className="item-header">
                                <h4>Bachelor of Technology (Artificial Intelligence)</h4>
                                <span className="date">2024 - 2025</span>
                            </div>
                            <p className="institution">Newton School of Technology, Rishihood University</p>
                            <p className="detail">Grade: 6.2/10.0</p>
                        </div>

                        <div className="resume-item">
                            <div className="item-header">
                                <h4>Intermediate (Class XII)</h4>
                                <span className="date">2023 - 2024</span>
                            </div>
                            <p className="institution">Deepanshu Public School</p>
                            <p className="detail">Grade: 60.0%</p>
                        </div>

                        <div className="resume-item">
                            <div className="item-header">
                                <h4>Matriculation (Class X)</h4>
                                <span className="date">2021 - 2022</span>
                            </div>
                            <p className="institution">Deepanshu Public School</p>
                            <p className="detail">Grade: 74.0%</p>
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="resume-section">
                        <h3 className="section-heading">Projects</h3>

                        <div className="resume-item">
                            <div className="item-header">
                                <h4>Clock</h4>
                                <span className="date">November 2025</span>
                            </div>
                            <p className="tech-stack">Tech Stack: React JS</p>
                            <ul>
                                <li>A modern time-management web app that provides a live digital clock, alarms, countdown timer, and stopwatch in one responsive interface</li>
                                <li>Live digital clock, alarm creation with time settings, countdown timer control, stopwatch with start/pause/reset</li>
                                <li>Fully responsive UI</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <div className="item-header">
                                <h4>ArtDeco Portfolio</h4>
                                <span className="date">November 2025</span>
                            </div>
                            <p className="tech-stack">Tech Stack: HTML, CSS, JavaScript</p>
                            <ul>
                                <li>A clean and responsive portfolio website to showcase projects, skills, and contact details</li>
                                <li>Responsive layout, project showcase section, smooth navigation, and a simple contact form</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <div className="item-header">
                                <h4>BMI Calculator</h4>
                                <span className="date">April 2025</span>
                            </div>
                            <p className="tech-stack">Tech Stack: HTML, CSS, JavaScript</p>
                            <ul>
                                <li>A simple and interactive BMI Calculator to help users determine their Body Mass Index using various unit options</li>
                                <li>Animated intro, unit selection (kg/lbs/st, cm/m/ft/in), dynamic BMI result with category display</li>
                                <li>Light/dark theme toggle with preference saved</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <div className="item-header">
                                <h4>To Do List</h4>
                                <span className="date">April 2025</span>
                            </div>
                            <p className="tech-stack">Tech Stack: HTML, CSS, JavaScript</p>
                            <ul>
                                <li>A clean To-Do List web app built with HTML, CSS, and JavaScript. It features task management, high-priority tagging, dark mode, and real-time tracking</li>
                                <li>Add, complete, and delete tasks, mark tasks as high priority, toggle between light and dark mode, view real-time task counter</li>
                            </ul>
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="resume-section">
                        <h3 className="section-heading">Technical Skills</h3>
                        <div className="skills-grid-resume">
                            <div className="skill-category">
                                <h5>Computer Languages:</h5>
                                <p>Python, JavaScript, CSS, HTML</p>
                            </div>
                            <div className="skill-category">
                                <h5>Software Packages:</h5>
                                <p>Express JS, Prisma ORM, Node.js, React, MySQL, MongoDB</p>
                            </div>
                        </div>
                    </section>

                    {/* Certifications */}
                    <section className="resume-section">
                        <h3 className="section-heading">Certifications & Achievements</h3>

                        <div className="resume-item">
                            <div className="item-header">
                                <h4>Junior Coding Olympiad</h4>
                                <span className="date">July 2024</span>
                            </div>
                            <p className="institution">Newton School of Technology</p>
                            <p className="detail">Secured rank 10 among 16,837 participants</p>
                        </div>
                    </section>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Resume;
