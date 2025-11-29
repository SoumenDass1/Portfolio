import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Professional Summary</h3>
                        <p>
                            I am an aspiring Frontend Developer passionate about crafting user-friendly interfaces.
                            Constantly learning and building innovative web experiences, I strive to create
                            applications that solve real-world problems while providing an exceptional user experience.
                        </p>
                        <p>
                            With a strong foundation in HTML, CSS, and JavaScript, along with modern frameworks like React,
                            I enjoy turning complex ideas into elegant, responsive, and interactive web solutions.
                        </p>
                    </motion.div>

                    <div className="about-details">
                        <motion.div
                            className="education-card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="card-header">
                                <BookOpen className="icon" size={24} />
                                <h3>Education</h3>
                            </div>

                            <div className="timeline">
                                <div className="timeline-item">
                                    <h4>Bachelor of Technology (Artificial Intelligence)</h4>
                                    <p className="institution">Newton School of Technology, Rishihood University</p>
                                    <span className="year">2024 - Present</span>
                                </div>

                                <div className="timeline-item">
                                    <h4>Intermediate (Class XII)</h4>
                                    <p className="institution">Deepanshu Public School</p>
                                    <span className="year">2023 - 2024</span>
                                    <span className="grade">Grade: 60.0%</span>
                                </div>

                                <div className="timeline-item">
                                    <h4>Matriculation (Class X)</h4>
                                    <p className="institution">Deepanshu Public School</p>
                                    <span className="year">2021 - 2022</span>
                                    <span className="grade">Grade: 74.0%</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="certifications-card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="card-header">
                                <Award className="icon" size={24} />
                                <h3>Certifications</h3>
                            </div>

                            <div className="cert-item">
                                <h4>Junior Coding Olympiad</h4>
                                <p className="institution">Newton School of Technology</p>
                                <span className="year">July 2024</span>
                                <p className="achievement">Secured rank 10 among 16837 participants</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
