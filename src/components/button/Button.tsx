import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import './button.css'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  children: ReactNode | string
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'
  htmlType?: 'submit' | 'reset' | 'button'
  className?: string
  onClick?: () => void
}
export const Button: FC<ButtonProps> = ({ children, type, className, onClick, htmlType, ...rest }) => {
  const buttonTypeClass = type ? `btn-${type}` : ''
  return (
    <button onClick={onClick} type={htmlType} className={`button ${buttonTypeClass} ${className || ''}`} {...rest}>
      {children}
    </button>
  )
}
