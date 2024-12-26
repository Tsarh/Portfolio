// import React from "react";
import './home.css'
import {motion} from "motion/react";
import Profil from "../../assets/home.png"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Home = ()=>{
    return (
        <section className="home section grid">
            <motion.img src={Profil} alt="" initial={{ scale: 0 }} animate={{ scale: 1,transition: { duration: 0.7 } }} className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <motion.h1 initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, transition: {duration: 1}, x: 0}} className="home__title">
                        <span>I'm RAZAFIMAMPIANINA Tsaroana Ny Aina F.</span> <br />Web Developper
                    </motion.h1>

                    <motion.p initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, transition: {duration: 1}, x: 0}} className="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum optio
                         voluptate saepe cupiditate pariatur voluptas necessitatibus veniam repellat mollitia tempora in ipsam
                          maiores odit cum nam amet obcaecati.
                    </motion.p>

                    <motion.Link initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1.5}}} to='/about' className='button'>
                        More About Me{' '}
                        <span className='button__icon'>
                            <FaArrowRight/>
                        </span>
                    </motion.Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    )
}

export default Home