import { v4 as uuidv4 } from 'uuid';

import { Skill, Technology } from "../../../model/Skill"
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
        <Stack direction='row' flexWrap='wrap' justifyContent='left'>
            {
                skills.map((skill: Skill, index) => {
                    return (
                        <Box mt={index !== 0 ? 1 : 0}
                            key={uuidv4()}
                            // borderLeft={{ xs: 'none', md: '1px dashed #e0e0e070' }}
                            // pl={{ xs: 0, md: 1 }}
                        >
                            <Typography variant='body2' component="h6" color="text.secondary" key={uuidv4()}>{skill.title}</Typography>

                            <Stack direction='row' flexWrap='wrap' justifyContent='left'>
                                {
                                    skill['technologies'].map((technology: Technology) => {
                                        return technology.displayTechnology === true && <Chip key={uuidv4()} technology={technology} hoveredProficiency={hoveredProficiency} />
                                    })
                                }
                            </Stack>
                        </Box>
                    )
                })
            }
        </Stack>
    )
}

export default GroupedSkills