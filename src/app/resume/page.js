'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaDownload } from 'react-icons/fa';

const ResumePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Drashti_Pateliya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleIframeError = () => {
    setError(true);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>

            <button
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            {isLoading && (
              <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}

            {error ? (
              <div className="flex flex-col items-center justify-center h-96 text-center px-4">
                <p className="text-red-600 dark:text-red-400 text-xl mb-4">
                  Unable to load the resume. Please try downloading it instead.
                </p>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  <FaDownload className="mr-2" />
                  Download PDF
                </button>
              </div>
            ) : (
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&print-dialog=0"
                className={`w-full h-[800px] ${isLoading ? 'hidden' : 'block'}`}
                onLoad={() => setIsLoading(false)}
                onError={handleIframeError}
                title="Resume"
                type="application/pdf"
                frameBorder="0"
                allowFullScreen={false}
              />
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResumePage;