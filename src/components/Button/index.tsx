import React from 'react'

//style
import css from './Button.module.scss'

interface IButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
    return (
        <button className={css.button} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button