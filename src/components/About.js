'use client';

import { motion } from 'framer-motion';

const About = () => {
  const details = [
    { label: 'College', value: 'Vishwakarma Government Engineering College' },
    { label: 'CPI', value: '7.68' },
    { label: 'Location', value: 'Gujarat, India' },
  ];

  const interests = [
    'Web Development',
    'DevOps',
    'Cloud Computing',
    'Cyber Security'
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Background</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a passionate developer with a strong foundation in Information Technology. My academic journey at Vishwakarma Government Engineering College has equipped me with both theoretical knowledge and practical skills in various aspects of software development.
            </p>
            <div className="space-y-4">
              {details.map((detail, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="text-gray-700 dark:text-gray-200 font-medium min-w-[100px]">
                    {detail.label}:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">{detail.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Interests</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am deeply interested in various aspects of software development and technology.
              My areas of focus include:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300"
                >
                  {interest}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;