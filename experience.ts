'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import Card from '@/components/ui/Card'

const experiences = [
  {
    company: 'Genovia Solutions',
    role: 'Developer Intern',
    duration: 'Current',
    description: 'Working on development projects and gaining hands-on experience with modern technologies.',
    current: true,
  },
  {
    company: 'Godjn Solutions',
    role: 'Android Development Intern',
    duration: '6 Weeks',
    description: 'Developed Android applications and gained practical experience in mobile development using Android Studio.',
    current: false,
  },
]

export default function Experience() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding bg-gray-50 dark:bg-gray-900/50"
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
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full" />
        </motion.div>

        {/* Experience Cards */}
        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                variant="glass"
                glow={exp.current}
                className={`relative overflow-hidden ${
                  exp.current ? 'border-accent-blue/30' : ''
                }`}
              >
                {/* Background Gradient */}
                {exp.current && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-blue/10 to-transparent rounded-full blur-3xl" />
                )}

                <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      {exp.current && (
                        <motion.span
                          className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-500 rounded-full"
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Current
                        </motion.span>
                      )}
                    </div>
                    <p className="text-accent-blue font-medium mb-2">{exp.role}</p>
                    <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                  </div>

                  <div className="flex items-center gap-2 text-accent-silver">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
