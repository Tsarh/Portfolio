import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaDribbble,
} from "react-icons/fa"

import { FiSend } from "react-icons/fi"
import "./contact.css"
import {motion} from "motion/react"
import transitions from "@material-ui/core/styles/transitions"

const Contact = ()=>{
    return (
        <motion.section initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1.5}}} className="contact section">
            <motion.h2 initial={{scale: 0}} animate={{scale: 0.9, transition: {duration: 0.5}}} className="section__title">Get In <span>Touch</span></motion.h2>

            <div className="contact__container container grid">
                <div className="contact__data">
                    <motion.h3 initial={{ transform: "translateY(-100px)" }} animate={{ transform: "translateY(0px)", transition: {duration: 1.1} }} className="contact__title">Don't be Shy !</motion.h3>

                    <motion.p initial={{ transform: "translateY(-100px)" }} animate={{ transform: "translateY(0px)", transition: {duration: 0.9} }} className="contact__description">
                        Feel free to get in touch with me. I am always open to discussing new projects,
                        creative ideas or opportunities to be part of your visions.
                    </motion.p>
                    

                    <div className="relative-contact">
                        <div className="contact__info">
                            <motion.div initial={{ transform: "translateY(-100px)" }} animate={{ transform: "translateY(0px)", transition: {duration: 0.7} }} className="info__item">
                                <FaEnvelopeOpen className="info__icon"/>
                                <div>
                                    <span className="info__title">
                                        Mail me
                                    </span>
                                    <h4 className="info__desc">Razjazz882@gmail.com</h4>
                                </div>
                            </motion.div>

                            <motion.div initial={{ transform: "translateY(-100px)" }} animate={{ transform: "translateY(0px)", transition: {duration: 0.5} }} className="info__item">
                                <FaPhoneSquareAlt className="info__icon"/>
                                <div>
                                    <span className="info__title">
                                        Call me
                                    </span>
                                    <h4 className="info__desc">034 50 513 24</h4>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="contact__socials">
                        <motion.a initial={{ transform: "translateX(-100px)" }} animate={{ transform: "translateX(0px)", transition: {duration: 1.1} }} href="https://facebook.com" className="contact__social-link">
                            <FaFacebookF />
                        </motion.a>
                        <motion.a initial={{ transform: "translateX(-100px)" }} animate={{ transform: "translateX(0px)", transition: {duration: 0.9} }} href="https://twitter.com" className="contact__social-link">
                            <FaTwitter />
                        </motion.a>
                        <motion.a initial={{ transform: "translateX(-100px)" }} animate={{ transform: "translateX(0px)", transition: {duration: 0.7} }} href="https://youtube.com" className="contact__social-link">
                            <FaYoutube />
                        </motion.a>
                        <motion.a initial={{ transform: "translateX(-100px)" }} animate={{ transform: "translateX(0px)", transition: {duration: 0.5} }} href="https://dribbble.com" className="contact__social-link">
                            <FaDribbble />
                        </motion.a>
                    </div>
                </div>

                <form className="contact__form">
                    <div className="form__input-group">
                        <motion.div initial={{ transform: "translateX(100px)" }} animate={{ transform: "translateX(0px)", transition: {duration: 0.5} }} className="form__input-div">
                            <input type="text" placeholder="Your Name" className="form__control" />
                        </motion.div>

                        <motion.div initial={{ transform: "translateX(100px)" }} animate={{ transform: "translateX(0px)", transition: {duration: 0.7} }} className="form__input-div">
                            <input type="email" placeholder="Your Email" className="form__control" />
                        </motion.div>

                        <motion.div initial={{ transform: "translateX(100px)" }} animate={{ transform: "translateX(0px)", transition: {duration: 0.9} }} className="form__input-div">
                            <input type="text" placeholder="Your Subject" className="form__control" />
                        </motion.div>
                    </div>

                    <motion.div initial={{ transform: "translateX(100px)" }} animate={{ transform: "translateX(0px)", transition: {duration: 0.5} }} className="form__input-div">
                        <textarea name="" placeholder="Your Message" className="form__control textarea"></textarea>
                    </motion.div>

                    <motion.button initial={{ transform: "translateY(100px)" }} animate={{ transform: "translateY(0px)", transition: {duration: 0.5} }} className="button">
                        Send Message <span className="button__icon contact__button-icon"> <FiSend /> </span>
                    </motion.button>
                </form>
            </div>
        </motion.section>
    )
}

export default Contact