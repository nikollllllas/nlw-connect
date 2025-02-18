import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
  return (
    <button
      className="rounded-xl px-5 h-12 bg-gray-500 text-blue font-semibold w-full cursor-pointer hover:bg-blue hover:text-gray-900 flex justify-between items-center transition-colors duration-300"
      {...props}
    />
  )
}
