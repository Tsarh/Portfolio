import { skills } from "../data";
import {motion} from "motion/react"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = ()=>{
    return <>
        {skills.map(({title, percentage}, index) => {
            return (
                <div className="progress__box" key={index}>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1.5}}} viewport={{amount: "all"}} className="progress__circle">
                        <CircularProgressbar strokeWidth={7.5} text={`${percentage}%`} value={percentage}/>
                    </motion.div>

                    <h3 className="skills__title">{title}</h3>
                </div>
            )
        })}
    </>
}

export default Skills;