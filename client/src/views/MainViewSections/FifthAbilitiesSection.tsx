import { v4 as uuidv4 } from 'uuid';

import skills from '../../data/skills.json'
import Skill from "../../model/Skill"

import styled from "@mui/material/styles/styled"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react'

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
`
const StyledKeyboardArrowDownIcon = styled(KeyboardArrowDownIcon)`

	color: ${(({ theme }) => theme.palette.text.muted.light)};

	position: relative;
	animation: pointDown 1s infinite;

	@keyframes pointDown {
		0% {top: 0}
		50% {top: 3px}
		100% {top: 0}
	}
`

const StyledHoverableButtonBox = styled(Box)`
	width: 30px;
	height: 30px;
	border-radius: 50%;

	margin-top: 5px;
	margin-bottom: 10px;
`

function FifthAbilitiesSection() {
	const [hoveredProficiency, setHoveredProficiency] = useState<1 | 2 | 3 | null>()

	const getChipColor = (proficieny: number) => {
		if (proficieny === 1) {
			return 'custom.chip.green'
		} else if (proficieny === 2) {
			return 'custom.chip.yellow'
		} else if (proficieny === 3) {
			return 'custom.chip.blue'
		}
	}

	return (
		<Box component='section' id="fifth-section">
			<Grid container spacing={5} py={5}>
				<Grid item md={2} textAlign="center">
					<Stack pt={3} direction="column" alignItems='center'>
						<Typography variant="body1" component='p' color="text.muted.light">HOVER</Typography>
						<Typography variant="body1" component='p' color="text.muted.light">TAP</Typography>

						<StyledKeyboardArrowDownIcon />

						<Box mt={3}>
							<Stack direction='column' alignItems='center'
								onMouseEnter={() => setHoveredProficiency(1)}
								onMouseLeave={() => setHoveredProficiency(null)}
								sx={{opacity: hoveredProficiency ? hoveredProficiency === 1 ? 1 : 0.5 : 1}}
							>
								<Typography variant="body1" component='p' color="text.secondary">PROFICIENT</Typography>
								<StyledHoverableButtonBox sx={{ backgroundColor: "custom.chip.green" }} />
							</Stack>

							<Stack direction='column' alignItems='center'
								onMouseEnter={() => setHoveredProficiency(2)}
								onMouseLeave={() => setHoveredProficiency(null)}
								sx={{opacity: hoveredProficiency ? hoveredProficiency === 2 ? 1 : 0.5 : 1}}
							>
								<Typography variant="body1" component='p' color="text.secondary">COMPETENT</Typography>
								<StyledHoverableButtonBox sx={{ backgroundColor: "custom.chip.yellow" }} />
							</Stack>

							<Stack direction='column' alignItems='center'
								onMouseEnter={() => setHoveredProficiency(3)}
								onMouseLeave={() => setHoveredProficiency(null)}
								sx={{opacity: hoveredProficiency ? hoveredProficiency === 3 ? 1 : 0.5 : 1}}
							>
								<Typography variant="body1" component='p' color="text.secondary">NOVICE</Typography>
								<StyledHoverableButtonBox sx={{ backgroundColor: "custom.chip.blue" }} />
							</Stack>
						</Box>
					</Stack>
				</Grid>
				<Grid item md={10} >
					<Typography mb={2} variant="h2" component='h3' color="text.secondary" textAlign='center'>My Abilities</Typography>

					<Stack direction='row' flexWrap='wrap' justifyContent='center'>
						{
							skills.map((skill: Skill) => {
								return <StyledChipBox
									key={uuidv4()}
									sx={{
										backgroundColor: getChipColor(skill.proficiency),
										opacity: hoveredProficiency ? hoveredProficiency === skill.proficiency ? 1 : 0.5 : 1
									}}
								>
									<img src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/icons/${skill.image}`} alt={`${skill.skill} logo`} />

									<p>{skill.skill}</p>
								</StyledChipBox>
							})
						}
					</Stack>

					<Typography mt={1} variant="body1" component='p' color="text.muted.main" textAlign='center'>*In constant learning of new skills and improvement on already existing ones</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

export default FifthAbilitiesSection