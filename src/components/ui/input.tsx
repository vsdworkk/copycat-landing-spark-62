import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border border-[#E0E0E0] bg-white px-3 py-2 text-base ring-offset-background transition-all duration-200",
          "placeholder:text-[#B0B0B0] placeholder:text-base md:text-sm md:placeholder:text-sm",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "focus-visible:border-[#3366FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3366FF]/20",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "hover:border-[#3366FF]/50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }