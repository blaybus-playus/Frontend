import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "text-[16px] w-full text-white bg-primary-400 hover:bg-primary-400",
        secondary:
          "text-[16px] w-full text-white bg-primary-500 hover:bg-primary-400",
        transparent:
          "text-[16px] w-full border border-primary-400 text-primary-400 bg-background hover:bg-accent hover:text-accent-foreground",
        choice:
          "text-[12px] body-semibold-12 bg-gray-950 text-gray-50 hover:bg-gray-950",
        nonchoice:
          "text-[12px] body-semibold-12 bg-gray-200 text-gray-400 hover:bg-gray-950",
        outline:
          "text-[16px] w-full text-primary-400 transparent border border-primary-400 hover:bg-primary-400 hover:text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-12 rounded-2xl",
        lg: "h-14 rounded-2xl ",
        sm: "w-[49px] h-[33px] rounded-[40px]"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
