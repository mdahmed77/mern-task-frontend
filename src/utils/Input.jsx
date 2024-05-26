import React from 'react'

const Input = ({ type, placeholder, onChange, sx, value }) => {
    return (
        <input
            className={`flex h-14 w-full rounded-md border border-input bg-white px-3 py-2 text-lg focus:outline-none disabled:cursor-not-allowed placeholder:text-slate-500 text-black disabled:opacity-50 ${sx ? sx : ''}`}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

export default Input