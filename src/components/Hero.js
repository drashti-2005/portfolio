'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Drashti Pateliya</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            A passionate developer specializing in MERN stack web development. Currently pursuing engineering at Vishwakarma Government Engineering College.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/resume"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              View Resume
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
            <Image
              src="/images/profile.jpg"
              alt="Kalpesh Vala"
              fill
              className="object-cover object-top transform rotate-180 scale-y-[-1]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;