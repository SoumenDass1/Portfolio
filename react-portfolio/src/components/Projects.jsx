import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(0);

    const projects = [
        {
            title: 'ArtDeco Portfolio',
            description: 'An elegant portfolio website inspired by the Art Deco era, featuring smooth animations and a sophisticated design aesthetic. My first year capstone project showcasing design skills and creative layouts.',
            features: [
                'Art Deco-inspired elegant design',
                'Smooth scroll animations',
                'Portfolio gallery with categorization',
                'Responsive layout for all devices',
                'Contact form integration'
            ],
            tech: ['HTML', 'CSS'],
            github: 'https://github.com/SoumenDass1/Capstone-Project-1',
            demo: 'https://capstone-project-1-one.vercel.app/',
            date: 'November 2024'
        },
        {
            title: 'To Do List',
            description: 'A clean and To-Do List web app featuring task management, high-priority tagging, dark mode, and real-time tracking.',
            features: [
                'Add, complete, and delete tasks',
                'Mark tasks as high priority',
                'Toggle between light and dark mode',
                'Real-time task counter'
            ],
            tech: ['HTML', 'CSS', 'JavaScript'],
            github: '#',
            demo: '#',
            date: 'April 2025'
        },
        {
            title: 'BMI Calculator',
            description: 'A simple and interactive BMI Calculator to help users determine their Body Mass Index using various unit options.',
            features: [
                'Animated intro',
                'Unit selection (kg/lbs/st, cm/m/ft/in)',
                'Dynamic BMI result with category display',
                'Light/dark theme toggle'
            ],
            tech: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/SoumenDass1/BMI_Calculator/blob/main/index.html',
            demo: 'https://calculate-mybmi.netlify.app/',
            date: 'April 2025'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-slider">
                    <div className="project-list">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`project-list-item ${activeProject === index ? 'active' : ''}`}
                                onClick={() => setActiveProject(index)}
                            >
                                <span>0{index + 1}</span>
                                <h3>{project.title}</h3>
                                <ChevronRight size={20} className="arrow" />
                            </div>
                        ))}
                    </div>

                    <motion.div
                        className="project-details"
                        key={activeProject}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="project-header">
                            <h3>{projects[activeProject].title}</h3>
                            <span className="project-date">{projects[activeProject].date}</span>
                        </div>

                        <p className="project-description">{projects[activeProject].description}</p>

                        <div className="project-features">
                            <h4>Key Features:</h4>
                            <ul>
                                {projects[activeProject].features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="project-tech">
                            {projects[activeProject].tech.map((tech, idx) => (
                                <span key={idx} className="tech-tag">{tech}</span>
                            ))}
                        </div>

                        <div className="project-links">
                            <a href={projects[activeProject].github} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                                <Github size={16} /> Github
                            </a>
                            <a href={projects[activeProject].demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                <ExternalLink size={16} /> Live Demo
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
