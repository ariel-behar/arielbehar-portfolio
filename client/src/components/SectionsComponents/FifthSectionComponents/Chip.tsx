import getChipColor from '../../../utils/getChipColor'

import Box from '@mui/material/Box'
import styled from '@mui/material/styles/styled'
import {Technology} from '../../../model/Skill'
import Typography from '@mui/material/Typography/Typography'

const StyledChipBox = styled(Box)`
 	margin: 10px 25px 15px 0;
	color: black;
	text-align: center;
	min-width: 160px;
    border-radius: 16px;
	/* transform: scale(0.95); */

	img {
		transform: scale(1.5);

		float: left;
		height: 27px;
		width: 27px;
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
    technology: Technology,
    hoveredProficiency: 1 | 2 | 3 | null
}

function Chip({technology, hoveredProficiency}: Props) {
    return (
        <StyledChipBox
           
            sx={{
                backgroundColor: getChipColor(technology.proficiency),
                opacity: hoveredProficiency ? hoveredProficiency === technology.proficiency ? 1 : 0.5 : 1
            }}
        >
            <img src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/icons/${technology.image}`} alt={`${technology.technology} logo`} />

            <Typography variant='body1' component='p' fontWeight='bold'>{technology.technology}</Typography>
        </StyledChipBox>
    )
}

export default Chip