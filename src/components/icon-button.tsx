import { ComponentProps, ReactNode } from "react"

interface IconButtonProps extends ComponentProps<"button"> {
  children: ReactNode
}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      className="rounded-md p-1.5 bg-gray-500 text-blue cursor-pointer hover:bg-blue hover:text-gray-900 flex justify-between items-center transition-colors duration-300"
      {...props}
    />
  )
}
