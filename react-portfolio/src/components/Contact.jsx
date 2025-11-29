import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Code } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Get In Touch
                </motion.h2>

                <div className="contact-wrapper">
                    <motion.div
                        className="contact-message"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Let's Connect</h3>
                        <p>
                            I'm currently open to new opportunities and collaborations.
                            Whether you have a question, a project idea, or just want to say hi,
                            feel free to reach out via email or connect with me on social media.
                        </p>
                        <div className="cta-buttons">
                            <a href="mailto:soumen.dass2024@nst.rishihood.edu.in" className="btn btn-primary">
                                <Mail size={18} /> Send Email
                            </a>
                            <a href="https://www.linkedin.com/in/soumen-dass-a69b94317/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                <Linkedin size={18} /> Connect on LinkedIn
                            </a>
                        </div>
                    </motion.div>

                    <div className="contact-cards">
                        <motion.div
                            className="contact-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="icon-box">
                                <Phone size={24} />
                            </div>
                            <h4>Phone</h4>
                            <p>+91 8882241153</p>
                        </motion.div>

                        <motion.div
                            className="contact-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="icon-box">
                                <Mail size={24} />
                            </div>
                            <h4>Email</h4>
                            <p>soumen.dass2024@nst.rishihood.edu.in</p>
                        </motion.div>

                        <motion.div
                            className="contact-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="icon-box">
                                <MapPin size={24} />
                            </div>
                            <h4>Location</h4>
                            <p>Sonipat, Haryana, India</p>
                        </motion.div>
                    </div>

                    <motion.div
                        className="social-connect"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3>Find me on</h3>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/soumen-dass-a69b94317/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Linkedin size={24} />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/SoumenDass1" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Github size={24} />
                                <span>Github</span>
                            </a>
                            <a href="https://leetcode.com/u/Soumen_Dass001/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Code size={24} />
                                <span>LeetCode</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
