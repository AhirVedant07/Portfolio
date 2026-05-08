'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import Card from '@/components/ui/Card'

const achievements = [
  {
    title: '6 Week Android Development Internship',
    description: 'Completed intensive internship at Godjn Solutions',
    icon: '📱',
  },
  {
    title: 'Coding Competition Certificates',
    description: 'Participated in various coding competitions',
    icon: '🏆',
  },
  {
    title: 'State Merit Rank Under 2500',
    description: 'Achieved in MSBTE Diploma examinations',
    icon: '🎖️',
  },
  {
    title: 'Strong Academic Performance',
    description: 'Consistent excellence throughout education',
    icon: '📚',
  },
]

export default function Certifications() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="certifications"
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
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full" />
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="glass" className="group h-full">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {achievement.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-accent-blue transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {achievement.description}
                    </p>
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
