'use client';

import { motion } from 'framer-motion';
import { FaCertificate, FaCalendarAlt, FaAward, FaExternalLinkAlt, FaCode, FaUsers, FaCog, FaChartLine } from 'react-icons/fa';

export default function Certifications() {
  const certifications = [
    {
      title: "Business Excellence P.A.C.E",
      issuer: "Quantum Leap Learning Solutions Pvt Ltd",
      date: "Oct 2025",
      credentialId: "QL1080",
      category: "Business",
      icon: <FaChartLine className="text-blue-600" size={20} />,
      hasCredential: true,
      description: "Professional certification in business excellence and process improvement methodologies."
    },
    {
      title: "Full Stack Development",
      issuer: "Blackbucks Group🦌",
      date: "Apr 2024",
      credentialId: "BBAPSCHDEIIDT2024PART004743",
      category: "Technology",
      icon: <FaCode className="text-green-600" size={20} />,
      hasCredential: true,
      description: "Comprehensive full-stack development certification covering modern web technologies."
    },
    {
      title: "ChatGPT for HR",
      issuer: "Great Learning",
      date: "Feb 2024",
      credentialId: null,
      category: "HR Technology",
      icon: <FaUsers className="text-purple-600" size={20} />,
      hasCredential: true,
      description: "Specialized training in using AI tools for human resources and talent management."
    },
    {
      title: "Project Management",
      issuer: "Great Learning",
      date: "Feb 2024",
      credentialId: null,
      category: "Management",
      icon: <FaCog className="text-orange-600" size={20} />,
      hasCredential: true,
      description: "Professional project management methodologies and best practices certification."
    },
    {
      title: "Scrum.org Certifications",
      issuer: "Great Learning",
      date: "Feb 2024",
      credentialId: "91535",
      category: "Agile",
      icon: <FaUsers className="text-blue-500" size={20} />,
      hasCredential: true,
      description: "Agile and Scrum methodology certification for effective team management."
    },
    {
      title: "Organizational Learning and Development",
      issuer: "Society for Human Resource Management, University of Washington Chapter",
      date: "Aug 2020",
      credentialId: null,
      category: "HR Development",
      icon: <FaUsers className="text-green-500" size={20} />,
      hasCredential: false,
      description: "Advanced certification in organizational development and learning strategies."
    },
    {
      title: "HR Certification Institute® (HRCI®)",
      issuer: "HRCI",
      date: "Jul 2020",
      credentialId: "AdkUmoInU3Za82OvbCNWtBtsxZj4",
      category: "HR Professional",
      icon: <FaAward className="text-red-600" size={20} />,
      hasCredential: false,
      description: "Professional HR certification from the leading HR credentialing organization."
    },
    {
      title: "LmusTCL - Licentiate in Music Theory",
      issuer: "Trinity College London",
      date: "May 2019",
      credentialId: null,
      category: "Music",
      icon: <FaAward className="text-purple-500" size={20} />,
      hasCredential: false,
      description: "Advanced music theory qualification demonstrating artistic and analytical skills."
    },
    {
      title: "Bachelors in Theology",
      issuer: "American Bible Society",
      date: "Completed",
      credentialId: null,
      category: "Theology",
      icon: <FaCertificate className="text-indigo-600" size={20} />,
      hasCredential: false,
      description: "Theological studies providing ethical foundation and human understanding."
    }
  ];

  const categories = [
    { name: "Business", count: 1, color: "bg-blue-100 text-blue-600" },
    { name: "Technology", count: 1, color: "bg-green-100 text-green-600" },
    { name: "HR & Management", count: 4, color: "bg-purple-100 text-purple-600" },
    { name: "Other", count: 3, color: "bg-orange-100 text-orange-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Qualifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications and specialized training programs.
          </p>
        </motion.div>

        {/* Categories Overview */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="grid md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                whileHover={{ scale: 1.05 }}
                className={`${category.color} p-4 rounded-lg text-center`}
              >
                <div className="font-bold text-2xl mb-1">{category.count}</div>
                <div className="text-sm font-medium">{category.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div className="mr-3 p-2 bg-gray-50 rounded-lg">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full mb-2">
                        {cert.category}
                      </span>
                    </div>
                  </div>
                  {cert.hasCredential && (
                    <FaExternalLinkAlt className="text-gray-400 hover:text-blue-600 cursor-pointer" size={14} />
                  )}
                </div>

                <h3 className="font-bold text-lg text-gray-800 mb-2 leading-tight">
                  {cert.title}
                </h3>

                <div className="text-sm text-gray-600 mb-2">
                  <div className="font-medium">{cert.issuer}</div>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <FaCalendarAlt className="mr-2" size={12} />
                  {cert.date}
                </div>

                {cert.credentialId && (
                  <div className="text-xs text-gray-500 font-mono bg-gray-50 p-2 rounded">
                    ID: {cert.credentialId}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Development Summary */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Commitment to Excellence</h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              My certification journey reflects a commitment to continuous learning and staying current with industry trends. 
              From traditional business and HR qualifications to cutting-edge technology and AI certifications, 
              I maintain expertise across multiple disciplines to deliver comprehensive solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <FaCertificate size={20} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">9+ Certifications</h4>
              <p className="text-gray-600 text-sm">
                Diverse portfolio of professional certifications across multiple industries and technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <FaAward size={20} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Continuous Learning</h4>
              <p className="text-gray-600 text-sm">
                Regularly updating skills and knowledge to stay ahead of industry trends and best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <FaChartLine size={20} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Applied Knowledge</h4>
              <p className="text-gray-600 text-sm">
                Practical application of certified knowledge in real-world business and technology scenarios.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}