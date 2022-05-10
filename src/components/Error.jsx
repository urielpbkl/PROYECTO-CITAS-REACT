import React from 'react'

export const Error = ({ children }) => {
    return (
        <div className='bg-red-400 text-white text-center p-3 uppercase font-bold mb-3 rounded-md mt-2'>
            <p>
            { children }
            </p>
        </div>
    )
}
