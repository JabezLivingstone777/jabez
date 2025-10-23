'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaUsers, FaGlobe, FaChartLine } from 'react-icons/fa';
import Image from 'next/image';
import jabezImage2 from '@/images/jabez 1.jpg';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const skills = [
    { name: 'Recruitment & Talent Acquisition', level: 95 },
    { name: 'Technology Operations', level: 90 },
    { name: 'Business Development', level: 88 },
    { name: 'Team Leadership', level: 92 },
    { name: 'Client Relations', level: 90 },
    { name: 'Project Management', level: 85 }
  ];

  const achievements = [
    {
      icon: <FaBriefcase className="text-blue-600" size={24} />,
      title: "15+ Years Experience",
      description: "Extensive experience in recruitment and technology operations across multiple industries"
    },
    {
      icon: <FaUsers className="text-green-600" size={24} />,
      title: "500+ Placements",
      description: "Successfully placed over 500 professionals in technology and business roles"
    },
    {
      icon: <FaGlobe className="text-purple-600" size={24} />,
      title: "Global Reach",
      description: "International experience working across US, India, and Asia Pacific regions"
    },
    {
      icon: <FaChartLine className="text-orange-600" size={24} />,
      title: "Business Growth",
      description: "Consistently exceeded targets and drove significant business growth"
    }
  ];

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
            About <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate leader in recruitment and technology operations, dedicated to building future-ready teams and innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Content - Professional Image */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="relative">
              <div className="w-full max-w-sm mx-auto">
                <Image
                  src={jabezImage2}
                  alt="Jabez Livingstone - Professional"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-60 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-200 rounded-full opacity-60 -z-10"></div>
            </div>
          </motion.div>

          {/* Middle Content - Story and Skills */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">My Story</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Spreading the word about who I am - and what my Company can do for you and your Company - is what I am all about. 
                Finding new accounts is only a part of what I do. Learning about my Client's requirements is another part. 
              </p>
              <p>
                However, the biggest (and best) part is learning about my Client, their needs, their environment, their goals and objectives. 
                As Vice President at APT IT Professional Services, I lead our Technology Operations and Global Recruitment divisions, 
                driving the company's strategic growth across international markets.
              </p>
              <p>
                My role bridges technical delivery and talent acquisition, ensuring our teams deliver world-class software solutions 
                backed by the right talent and operational efficiency. With over 15 years of experience in the industry, 
                I have developed a deep understanding of technology trends and talent requirements.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-6 text-gray-800">Core Competencies</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Section - Full Width */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      {achievement.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">Education & Background</h4>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p>• Bachelor's degree in Theology/Theological Studies - Princeton Theological Seminary</p>
                <p>• Engineer's Degree in Computer Science Engineering - Jawaharlal Nehru Technological University</p>
              </div>
              <div>
                <p>• Diploma in Mechanical Engineering - State Board of Technical Education and Training</p>
                <p>• Multiple Professional Certifications in HR, Project Management, and Full Stack Development</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}