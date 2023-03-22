import { feedback } from "../constants"
import styles from "../style"
import FeedbackCard from "./FeedbackCard"

const Testimonials = () => (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className="absolute z-[0] w-[70%] h-[70%] rounded-full blue__gradient -right-[50%] " />
        <div className="w-full flex flex-1 sm:justify-center items-center sm:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h1 className={styles.heading2}>What people are <br className="sm:block hidden" /> saying about us.</h1>
            <div className="w-full md:mt-0 mt-6">
                <p className={`${styles.paragraph} text-justify max-w-[450px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <div className="flex flex-1 flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1] ">
            {feedback.map((card) => (
                <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
    </section>
)


export default Testimonials