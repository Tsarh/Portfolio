// import React from "react";
import './home.css'
import Profil from "../../assets/home.jpg"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Home = ()=>{
    return (
        <section className="home section grid">
            <img src={Profil} alt="" className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I'm RAZAFIMAMPIANINA Tsaroana Ny Aina F.</span> <br />Web Developper
                    </h1>

                    <p className="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum optio
                         voluptate saepe cupiditate pariatur voluptas necessitatibus veniam repellat mollitia tempora in ipsam
                          maiores odit cum nam amet obcaecati.
                    </p>

                    <Link to='/about' className='button'>
                        More About Me{' '}
                        <span className='button__icon'>
                            <FaArrowRight/>
                        </span>
                    </Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    )
}

export default Home