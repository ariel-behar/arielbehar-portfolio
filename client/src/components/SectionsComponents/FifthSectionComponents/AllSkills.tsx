import { v4 as uuidv4 } from 'uuid';

import { Skill, Technology } from "../../../model/Skill"
import Chip from './Chip';

import Stack from '@mui/material/Stack';

interface Props {
    skills: Skill[],
    hoveredProficiency: 1 | 2 | 3 | null
}

function AllSkills({skills, hoveredProficiency}:Props) {
    return (
        <Stack direction='row' flexWrap='wrap' justifyContent='left'>
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
        </Stack>
    )
}

export default AllSkills