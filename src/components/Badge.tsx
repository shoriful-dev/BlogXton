import { ReactNode } from "react";


interface BadgeProps {
  className?: string;
  btnText: ReactNode
}

const Badge: React.FC<BadgeProps> = ({ className = '', btnText }) => {
  return (
    <>
    <button className={`px-8 py-2 bg-red text-white font-Prompt rounded-md ${className}`}>{btnText}</button>
    </>
  )
}

export default Badge;
