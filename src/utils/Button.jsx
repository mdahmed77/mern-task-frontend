import React from 'react'

const Button = ({ type, name, onClick, sx }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium disabled:pointer-events-none disabled:opacity-50 bg-violet-700 text-white hover:bg-violet-800 h-14 px-8 ${sx ? sx : ''}`}>
            {name}
        </button>
    )
}

export default Button