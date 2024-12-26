import {portfolio} from "../../data"
import PortfolioItem from "../../components/PortfolioItem"
import "./portfolio.css"
import { motion } from "motion/react"

const Portfolio = ()=>{
    return (
        <motion.section initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1.5}}} className="portfolio section">
            <h2 className="section__title">My <span>Portfolio</span></h2>
            <div className="portfolio__container container grid">
                {portfolio.map((item) => {
                    return <PortfolioItem key={item.id} {...item} />
                })}
            </div>
        </motion.section>
    )
}

export default Portfolio