'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'glass' | 'solid'
  hover?: boolean
  glow?: boolean
  children: React.ReactNode
}

export default function Card({
  variant = 'glass',
  hover = true,
  glow = false,
  className,
  children,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300'
  
  const variants = {
    glass: 'glass-card',
    solid: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800',
  }

  return (
    <motion.div
      className={cn(
        baseStyles,
        variants[variant],
        hover && 'hover:translate-y-[-4px] hover:shadow-2xl',
        glow && 'hover:shadow-accent-blue/20',
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}
