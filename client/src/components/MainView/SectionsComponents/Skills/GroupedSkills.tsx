import { v4 as uuidv4 } from 'uuid';

import { Skill, Technology } from "../../../../model/Skill"
import Chip from './Chip';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

interface Props {
    skills: Skill[],
    hoveredProficiency: 1 | 2 | 3 | null
}

function GroupedSkills({ skills, hoveredProficiency }: Props) {
    return (
        <>
            {
                skills.map((skill: Skill, index) => {
                    return (
                        <Box mt={{ xs: 1, sm: 1.5, md: 0.2 }} key={uuidv4()} width='100%'>
                            <Typography variant='body2' component="h6" color="text.secondary" key={uuidv4()} textAlign={{xs: 'center', sm: 'left'}}>{skill.title}</Typography>

                            <Stack direction='row' flexWrap='wrap' justifyContent='left' >
                                {
                                    skill['technologies'].map((technology: Technology) => {
                                        return technology.displayTechnology === true && (
                                            <Chip key={uuidv4()} technology={technology} hoveredProficiency={hoveredProficiency} />
                                        )
                                    })
                                }
                            </Stack>
                        </Box>
                    )
                })
            }
        </>
    )
}

export default GroupedSkills