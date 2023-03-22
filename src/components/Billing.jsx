import React from 'react'
import { apple, bill, google } from "../assets"
import styles, { layout } from "../style"

const Billing = () => (
    <section id="product" className={`${layout.sectionReverse}`}>
        <div className={layout.sectionImgReverse}>
            <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
            <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
            <div className='absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
        </div>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' />
                billing & invoicing</h2>
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className='flex flex-wrap flex-row sm:mt-10 mt-6'>
                <img src={apple} alt="apple" className='w-[128px] h-[42px] object-contain cursor-pointer' />
                <img src={google} alt="play-store" className='w-[128px] h-[42px] object-contain cursor-pointer' />
            </div>

        </div>
    </section>
)

export default Billing