import React from 'react'

const Button = ({ styles }) => {
    return (
        <button className={`${styles} bg-blue-gradient py-4 px-6 font-poppins text-primary text-[18px] font-medium outline-none rounded-[10px]`}>Get Started</button>
    )
}

export default Button