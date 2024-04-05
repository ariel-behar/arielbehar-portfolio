import { v4 as uuidv4 } from 'uuid';

import { Skill, Technology } from "../../../model/Skill"
import Chip from './Chip';

interface Props {
    skills: Skill[],
    hoveredProficiency: 1 | 2 | 3 | null
}

function AllSkills({skills, hoveredProficiency}:Props) {
    return (
        <>
            {
                skills.map((skill: Skill) => {
                    return (
                        <>
                            {
                                skill['technologies'].map((technology: Technology) => {
                                    return technology.displayTechnology === true && <Chip key={uuidv4()} technology={technology} hoveredProficiency={hoveredProficiency} />
                                })
                            }
                        </>
                    )
                })
            }
        </>
    )
}

export default AllSkills