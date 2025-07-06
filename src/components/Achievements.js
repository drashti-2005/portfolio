'use client';

import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      title: 'Aspire Leaders Program (Modules 1 & 2)',
      description:
        'Completed personal & professional development and masterclasses led by world-class educators.',
      date: '2024',
      icon: '🌍',
      link: 'https://www.linkedin.com/in/drashti-pateliya-314824324/details/certifications/',
    },
    {
      title: 'Smart India Hackathon',
      description:
        'Participated in national-level hackathon organized by the Government of India.',
      date: '2024',
      icon: '💡',
      link: 'https://www.linkedin.com/in/drashti-pateliya-314824324/details/certifications/',
    },
    {
      title: 'The Git & Github Bootcamp: Master Git In 2025',
      description:
        'Completed hands-on Git & GitHub bootcamp with practical projects and real-world workflows via Udemy.',
      date: '2025',
      icon: '📦',
      link: 'https://www.udemy.com/certificate/UC-48ec26f0-7ec2-4d36-b48c-7c226756b65e/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.date}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </div>
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm text-blue-600 dark:text-blue-400 underline"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
