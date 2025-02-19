import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        'rounded-md p-1.5 bg-gray-500 text-blue cursor-pointer hover:bg-blue hover:text-gray-900 flex justify-between items-center transition-colors duration-300',
        className
      )}
      {...props}
    />
  )
}
