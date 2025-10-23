'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      title: "Vice President",
      company: "APT IT Professional Services",
      period: "Oct 2025 - Present",
      location: "New York, United States",
      duration: "1 month",
      description: [
        "Leading Technology Operations and Global Recruitment divisions",
        "Driving strategic growth across international markets",
        "Overseeing end-to-end software development for web, mobile, and enterprise applications",
        "Managing cross-functional teams to deliver world-class software solutions",
        "Ensuring operational efficiency and talent acquisition alignment"
      ],
      type: "current"
    },
    {
      title: "Director",
      company: "APT IT Professional Services",
      period: "Jan 2022 - Present",
      location: "New York, United States",
      duration: "3 years 10 months",
      description: [
        "Strategic leadership in technology operations and business development",
        "Building and managing high-performance teams",
        "Developing and implementing growth strategies",
        "Client relationship management and business expansion"
      ],
      type: "ongoing"
    },
    {
      title: "Director",
      company: "Schengen Visa Itinerary Services LLC",
      period: "Aug 2024 - Present",
      location: "New York City Metropolitan Area",
      duration: "1 year 3 months",
      description: [
        "Business Analyst in Talent Acquisition",
        "Leveraging data-driven insights to optimize recruitment strategies",
        "Analyzing recruitment data to identify trends and provide actionable insights",
        "Optimizing hiring processes to improve efficiency and reduce time-to-hire"
      ],
      type: "ongoing"
    },
    {
      title: "Manager - Accounts/Delivery & Operations",
      company: "APT IT Professional Services",
      period: "Jun 2020 - Nov 2024",
      location: "Kings Park, New York, United States",
      duration: "4 years 6 months",
      description: [
        "Managed accounts and delivery operations for staffing services",
        "Coordinated with clients and internal teams for project delivery",
        "Implemented process improvements for operational efficiency",
        "Maintained high client satisfaction and retention rates"
      ],
      type: "completed"
    },
    {
      title: "Manager - Accounts & Delivery",
      company: "Bridgetown Consulting Group",
      period: "May 2019 - Jun 2020",
      location: "Piscataway, NJ",
      duration: "1 year 2 months",
      description: [
        "Managed staffing services operations",
        "Coordinated client accounts and project delivery",
        "Developed strategic partnerships with key clients",
        "Implemented quality assurance processes"
      ],
      type: "completed"
    },
    {
      title: "Founding Partner",
      company: "DoyenSquare Technologies",
      period: "Jan 2017 - Dec 2019",
      location: "Hyderabad, Telangana, India",
      duration: "3 years",
      description: [
        "Co-founded and led technology consulting company",
        "Developed business strategy and operational framework",
        "Built client relationships and managed key accounts",
        "Oversaw technology delivery and team management"
      ],
      type: "completed"
    }
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const getStatusColor = (type: string) => {
    switch (type) {
      case 'current':
        return 'bg-green-500';
      case 'ongoing':
        return 'bg-blue-500';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusText = (type: string) => {
    switch (type) {
      case 'current':
        return 'Current Position';
      case 'ongoing':
        return 'Ongoing';
      default:
        return 'Completed';
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
            Professional <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 15 years of progressive leadership experience in technology operations, recruitment, and business development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-green-600 h-full"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className={`w-4 h-4 rounded-full ${getStatusColor(exp.type)} border-4 border-white shadow-lg`}></div>
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${getStatusColor(exp.type)}`}>
                        {getStatusText(exp.type)}
                      </span>
                      <span className="text-sm text-gray-500">{exp.duration}</span>
                    </div>

                    {/* Job Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                    
                    {/* Company */}
                    <div className="flex items-center text-blue-600 font-semibold mb-2">
                      <FaBriefcase className="mr-2" size={14} />
                      {exp.company}
                    </div>

                    {/* Period */}
                    <div className="flex items-center text-gray-600 mb-2">
                      <FaCalendarAlt className="mr-2" size={14} />
                      {exp.period}
                    </div>

                    {/* Location */}
                    <div className="flex items-center text-gray-600 mb-4">
                      <FaMapMarkerAlt className="mr-2" size={14} />
                      {exp.location}
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-700 text-sm flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Career Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">6+</div>
              <div className="text-gray-700">Leadership Roles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-700">Companies Founded/Co-founded</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}