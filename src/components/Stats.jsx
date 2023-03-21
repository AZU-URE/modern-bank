import React from 'react'
import styles from "../style"
import { stats } from "../constants/index"

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((stat) => (
            <div key={stat.id} className="flex sm:flex-row flex-col items-center justify-start m-3 sm:flex-1">
                <h4 className='text-white font-poppins xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] font-semibold'>{stat.value}</h4>
                <p className='text-gradient font-poppins xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] font-normal ml-3 uppercase'>{stat.title}</p>
            </div>
        ))}
    </section>
)

export default Stats