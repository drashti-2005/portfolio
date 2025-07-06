'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

const ProjectsPage = () => {
  const allProjects = [
    {
      title: 'Employee Management System',
      description: 'A simple Spring Boot application that performs CRUD operations for managing employees...',
      image: '/user-crud.jpeg',
      github: 'https://github.com/Kalpesh-Vala/user-crud',
      demo: '',
      video: '',
      tags: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
      highlights: [
        'Built CRUD endpoints using Spring Data JPA',
        'Implemented service-repository-controller architecture',
        'Used MySQL as backend database',
      ],
    },
    {
      title: 'E-commerce Backend System - MyShops',
      description: 'Developed a fully-functional e-commerce backend using Spring Boot following clean architecture...',
      image: '/springboot-ecommerce.jpeg',
      github: 'https://github.com/Kalpesh-Vala/my-shops',
      demo: '',
      video: '',
      tags: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'REST API'],
      highlights: [
        'Modular folder structure with services, DTOs, requests/responses, and exceptions',
        'Implemented user authentication, product, cart, and order APIs',
        'Containerized the application using Docker for easy deployment',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              All Projects
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A collection of my work and side projects
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-10 sm:grid-cols-2"
          >
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-5">
                    <h3 className="text-lg font-medium mb-2">Key Highlights</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline dark:text-blue-400"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline dark:text-blue-400"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline dark:text-blue-400"
                      >
                        <FaPlay />
                        Watch Video
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
