'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt, FaBook, FaAward } from 'react-icons/fa';

export default function Education() {
  const education = [
    {
      degree: "Bachelor's degree in Theology/Theological Studies",
      institution: "Princeton Theological Seminary",
      period: "Completed",
      location: "Princeton, NJ",
      type: "Bachelor's",
      description: "Comprehensive study in theological principles, biblical studies, and religious philosophy. Developed strong analytical, research, and communication skills.",
      icon: <FaGraduationCap className="text-blue-600" size={24} />
    },
    {
      degree: "Engineer's Degree in Computer Science Engineering",
      institution: "Jawaharlal Nehru Technological University",
      period: "Completed",
      location: "Hyderabad, India",
      type: "Engineering",
      description: "Comprehensive engineering education covering software development, computer systems, programming languages, and technology fundamentals.",
      icon: <FaUniversity className="text-green-600" size={24} />
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "State Board of Technical Education and Training",
      period: "Completed",
      location: "India",
      type: "Diploma",
      description: "Technical education in mechanical engineering principles, manufacturing processes, and engineering design fundamentals.",
      icon: <FaBook className="text-purple-600" size={24} />
    },
    {
      degree: "High School - Information Technology",
      institution: "St. Joseph High School",
      period: "Completed",
      location: "India",
      type: "High School",
      description: "Secondary education with specialization in Information Technology, building foundation for technical career.",
      icon: <FaAward className="text-orange-600" size={24} />
    }
  ];

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

  const getDegreeColor = (type: string) => {
    switch (type) {
      case "Bachelor's":
        return 'bg-gradient-to-r from-blue-500 to-blue-600';
      case 'Engineering':
        return 'bg-gradient-to-r from-green-500 to-green-600';
      case 'Diploma':
        return 'bg-gradient-to-r from-purple-500 to-purple-600';
      default:
        return 'bg-gradient-to-r from-orange-500 to-orange-600';
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
            Educational <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse educational foundation spanning theology, computer science, and engineering, providing a unique perspective on technology and human development.
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className={`${getDegreeColor(edu.type)} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-white/20 rounded-lg">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{edu.type}</h3>
                      <p className="text-white/90 text-sm">{edu.period}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {edu.degree}
                </h4>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FaUniversity className="mr-2" size={14} />
                    <span className="font-medium">{edu.institution}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2" size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Educational Philosophy */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Educational Philosophy</h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              My diverse educational background has shaped my unique approach to leadership and problem-solving. 
              The combination of theological studies, computer science engineering, and mechanical engineering has provided 
              me with a well-rounded perspective that bridges technology, human understanding, and practical implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <FaGraduationCap size={20} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Theological Foundation</h4>
              <p className="text-gray-600 text-sm">
                Strong ethical foundation and understanding of human nature that guides leadership decisions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <FaUniversity size={20} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Technical Expertise</h4>
              <p className="text-gray-600 text-sm">
                Deep understanding of technology and engineering principles that drive innovation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <FaBook size={20} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Practical Application</h4>
              <p className="text-gray-600 text-sm">
                Ability to translate theoretical knowledge into practical solutions and business results.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Academic Achievements */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Academic Excellence</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-700">Degrees & Diplomas</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-700">Fields of Study</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
              <div className="text-gray-700">Countries</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-700">Years Applied</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}