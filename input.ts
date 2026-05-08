'use client'

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          ref={ref}
          className={cn(
            'peer w-full px-4 pt-6 pb-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-transparent',
            'focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all',
            'placeholder-transparent',
            error && 'border-red-500',
            className
          )}
          placeholder={label}
          {...props}
        />
        <label
          className={cn(
            'absolute left-4 top-2 text-xs text-gray-500 transition-all',
            'peer-placeholder-shown:top-4 peer-placeholder-shown:text-base',
            'peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-blue'
          )}
        >
          {label}
        </label>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          ref={ref}
          className={cn(
            'peer w-full px-4 pt-6 pb-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-transparent',
            'focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all',
            'placeholder-transparent resize-none min-h-[150px]',
            error && 'border-red-500',
            className
          )}
          placeholder={label}
          {...props}
        />
        <label
          className={cn(
            'absolute left-4 top-2 text-xs text-gray-500 transition-all',
            'peer-placeholder-shown:top-4 peer-placeholder-shown:text-base',
            'peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-blue'
          )}
        >
          {label}
        </label>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
