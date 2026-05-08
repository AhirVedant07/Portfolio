'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'PHP', level: 80 },
      { name: 'JavaScript', level: 75 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'Firebase', level: 75 },
      { name: 'PHP Backend', level: 80 },
      { name: 'XAMPP', level: 85 },
    ],
  },
  {
    title: 'Development',
    skills: [
      { name: 'Android Development', level: 80 },
      { name: 'Full Stack Development', level: 70 },
      { name: 'Backend Development', level: 85 },
    ],
  },
  {
    title: 'AI & Technical',
    skills: [
      { name: 'Computer Networks', level: 75 },
      { name: 'Encryption & Decryption', level: 70 },
      { name: 'Data Science', level: 75 },
    ],
  },
]

const techIcons = [
  { name: 'Java', color: '#007396' },
  { name: 'PHP', color: '#777BB4' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Android', color: '#3DDC84' },
  { name: 'HTML', color: '#E34F26' },
  { name: 'CSS', color: '#1572B6' },
]

export default function Skills() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full" />
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.div
          className="relative h-24 mb-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 flex items-center">
            <motion.div
              className="flex gap-12 items-center"
              animate={{ x: [0, -800] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              {[...techIcons, ...techIcons].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 px-6 py-3 rounded-xl glass"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <span
                    className="text-lg font-semibold"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="glass-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 gradient-text">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-accent-silver text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.1 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
