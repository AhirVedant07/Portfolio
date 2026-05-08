'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import Card from '@/components/ui/Card'

const education = [
  {
    institution: 'Shah and Anchor Kutchhi Engineering College',
    location: 'Mumbai',
    degree: 'B.Tech in AI and Data Science',
    duration: '2023 - Present',
    grade: 'Current GPA: 8.55/10',
    highlight: true,
  },
  {
    institution: 'MSBTE',
    location: 'Maharashtra',
    degree: 'Diploma in Information Technology',
    duration: '2020 - 2023',
    grade: 'Percentage: 89.38%',
    achievement: 'State Merit Rank: Under 2500',
    highlight: false,
  },
  {
    institution: 'Lourdes High School',
    location: 'Kalyan',
    degree: 'SSC',
    duration: '2020',
    grade: 'Percentage: 81.60%',
    highlight: false,
  },
]

export default function Education() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="education"
      ref={ref}
      className="section-padding"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent md:-translate-x-1/2" />

          {/* Timeline Items */}
          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              className={`relative flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10">
                <motion.div
                  className={`w-full h-full rounded-full ${
                    item.highlight
                      ? 'bg-gradient-to-r from-accent-blue to-accent-purple'
                      : 'bg-accent-silver'
                  }`}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />
                {item.highlight && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-accent-blue/30"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <Card
                  variant="glass"
                  glow={item.highlight}
                  className={`relative ${item.highlight ? 'border-accent-blue/30' : ''}`}
                >
                  {item.highlight && (
                    <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-accent-blue to-accent-purple text-white text-xs rounded-full font-medium">
                      Current
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <h3 className="font-semibold text-lg">{item.institution}</h3>
                    <span className="text-sm text-accent-silver">{item.duration}</span>
                  </div>
                  
                  <p className="text-accent-blue font-medium mb-2">{item.degree}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.location}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                      {item.grade}
                    </p>
                    {item.achievement && (
                      <p className="text-sm text-accent-purple mt-1">
                        🏆 {item.achievement}
                      </p>
                    )}
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
