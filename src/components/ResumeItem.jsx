import parse from "html-react-parser"
import { motion } from "motion/react";

const ResumeItem = ({icon, year, title, desc}) => {
    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1.5}}} viewport={{amount: "all"}} className="resume__item">
            <div className="resume__icon">{icon}</div>

            <span className="resume__date">{year}</span>
            <h3 className="resume__subtitle">{parse(title)}</h3>
            <p className="resume__description">{desc}</p>
        </motion.div>
    )
}

export default ResumeItem;