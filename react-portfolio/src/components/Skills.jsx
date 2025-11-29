import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'HTML', level: 60, icon: <Layout size={20} /> },
        { name: 'CSS', level: 55, icon: <Layout size={20} /> },
        { name: 'JavaScript', level: 18, icon: <Code2 size={20} /> },
        { name: 'Python', level: 20, icon: <Terminal size={20} /> },
        { name: 'React', level: 15, icon: <Code2 size={20} /> },
        { name: 'Node.js', level: 10, icon: <Terminal size={20} /> },
        { name: 'Express.js', level: 5, icon: <Terminal size={20} /> },
        { name: 'MySql', level: 50, icon: <Terminal size={20} /> },
        { name: 'MongoDB', level: 15, icon: <Terminal size={20} /> },
        { name: 'Git/GitHub', level: 20, icon: <Database size={20} /> },
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My Skills
                </motion.h2>

                <div className="skills-container">
                    <motion.div
                        className="skills-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Technical Proficiency</h3>
                        <p>
                            I have developed a solid foundation in web development technologies.
                            My expertise lies in building responsive and interactive user interfaces
                            using HTML, CSS, and JavaScript.
                        </p>
                        <p>
                            I am also proficient in Python for backend logic and data processing.
                            Currently, I am expanding my skills in the React ecosystem to build
                            modern single-page applications.
                        </p>
                    </motion.div>

                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="skill-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="skill-icon">
                                    {skill.icon}
                                </div>
                                <div className="skill-info">
                                    <h4>{skill.name}</h4>
                                    <div className="skill-bar-container">
                                        <motion.div
                                            className="skill-bar"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        ></motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
