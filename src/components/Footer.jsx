import styles from "../style"
import { footerLinks, socialMedia } from "../constants/index"
import { logo } from "../assets"

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className="flex flex-1 flex-col justify-start mr-10">
                <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain " />
                <p className={`${styles.paragraph} max-w-[310px] mt-4`}>
                    A new way to make the payment easy, reliable and secure
                </p>
            </div>
            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 ">
                {footerLinks.map((footerLink) => (
                    <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                        <h4 className="font-medium font-poppins text-white text-[18px] leading-[27px] mb-[24px]">{footerLink.title}</h4>
                        <ul>
                            {footerLink.links.map((link, index) => (
                                <li className={`font-poppins font-normal text-dimWhite text-[16px] hover:text-secondary cursor-pointer leading-[24px] ${index !== footerLink.links.length - 1 ? 'mb-[12px]' : 'mb-0'}`} key={link.name}>
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center w-full pt-6 border-t-[1px] border-t-[#3F3E45]">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                2023 Hoobank. All Rights Reserved
            </p>
            <div className="flex flex-row mt-6 md:mt-0">
                {socialMedia.map((social, index) => (
                    <img key={social.id} src={social.icon} alt={social.id}
                        className={`w-[21px] h-[21px] object-contain ${index !== social.length - 1 ? 'mr-6' : mr - 0}`}
                    />
                ))}
            </div>
        </div>
    </section>
)




export default Footer