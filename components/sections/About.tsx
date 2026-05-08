'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import Card from '@/components/ui/Card'

const interests = [
  {
    title: 'Problem Solving',
    icon: '🧩',
    description: 'Analytical thinking and algorithmic solutions',
  },
  {
    title: 'Backend Systems',
    icon: '⚙️',
    description: 'Scalable server architecture and APIs',
  },
  {
    title: 'AI Development',
    icon: '🤖',
    description: 'Machine learning and intelligent systems',
  },
  {
    title: 'Android Apps',
    icon: '📱',
    description: 'Native mobile application development',
  },
  {
    title: 'Data Science',
    icon: '📊',
    description: 'Data analysis and visualization',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-gray-50 dark:bg-gray-900/50"
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="glass" className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-purple/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <p className="body-lg text-gray-700 dark:text-gray-300 mb-6">
                  I am <span className="font-semibold text-accent-blue">Vedant Ahir</span>, an AI and Data Science engineering student passionate about backend development, machine learning, and intelligent systems.
                </p>
                <p className="body-md text-gray-600 dark:text-gray-400">
                  I enjoy building scalable applications, AI-powered tools, and modern web solutions. My interests include Android development, cybersecurity concepts, networking, backend systems, and data-driven applications.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Interest Cards */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                variants={itemVariants}
                className="perspective"
              >
                <Card
                  variant="glass"
                  className="text-center group cursor-pointer h-full"
                >
                  <motion.div
                    className="text-4xl mb-3"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {interest.icon}
                  </motion.div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-accent-blue transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {interest.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
