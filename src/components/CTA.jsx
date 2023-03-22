import styles from "../style"
import Button from "./Button"

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} rounded-[20px] box-shadow sm:flex-row flex-col bg-black-gradient`}>
        <div className="flex flex-1 flex-col">
            <h2 className={styles.heading2}>
                Let's try our service now!
            </h2>
            <p className={` max-w-[470px] mt-5 ${styles.paragraph}`}>
                Everything you need ot accept card payment and grow your business anywhere on the planet.
            </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
            <Button />
        </div>
    </section>
)


export default CTA