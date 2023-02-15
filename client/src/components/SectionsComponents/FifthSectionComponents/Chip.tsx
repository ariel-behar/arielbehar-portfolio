import getChipColor from '../../../utils/getChipColor'

import Box from '@mui/material/Box'
import styled from '@mui/material/styles/styled'
import Skill from '../../../model/Skill'
import Typography from '@mui/material/Typography/Typography'

const StyledChipBox = styled(Box)`
 	margin: 17px 7px;
	color: black;
	text-align: center;
	font-size: 17px;
	min-width: 170px;
    border-radius: 16px;

	img {
		transform: scale(1.5);

		float: left;
		margin: 0 8px;
		height: 32px;
		width: 32px;
		border-radius: 50%;
	}

	p {
		margin: 3px 0 0 0;
	}

	@media (max-width: 399px){
		min-width: 155px;
	}
`

interface Props {
    skill: Skill,
    hoveredProficiency: 1 | 2 | 3 | null
}

function Chip({skill, hoveredProficiency}: Props) {
    return (
        <StyledChipBox
           
            sx={{
                backgroundColor: getChipColor(skill.proficiency),
                opacity: hoveredProficiency ? hoveredProficiency === skill.proficiency ? 1 : 0.5 : 1
            }}
        >
            <img src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/icons/${skill.image}`} alt={`${skill.skill} logo`} />

            <Typography variant='body1' component='p' fontWeight='bold'>{skill.skill}</Typography>
        </StyledChipBox>
    )
}

export default Chip