"use client"

import React from 'react';

const Boton = ({children, className = '', ...args}: {children: React.ReactNode, className?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {

    return (
        <button
            className={`text-white rounded-lg py-2 px-4 bg-gray-500 ${className}`}
            {...args}
        >
            {children}
        </button>
    )
}

export default Boton
