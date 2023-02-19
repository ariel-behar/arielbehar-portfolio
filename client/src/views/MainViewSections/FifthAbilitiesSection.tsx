import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import skills from '../../data/skills.json'
import Skill from "../../model/Skill"

import styled from "@mui/material/styles/styled"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Chip from '../../components/SectionsComponents/FifthSectionComponents/Chip'
import ProficiencyTitle from '../../components/SectionsComponents/FifthSectionComponents/ProficiencyTitle';

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

const skillTitles: {title: string, proficiencyNum: 1 | 2 | 3}[] = [
	{
		title: 'PROFICIENT',
		proficiencyNum: 1
	},
	{
		title: 'COMPETENT',
		proficiencyNum: 2
	},
	{
		title: 'NOVICE',
		proficiencyNum: 3
	}

]

interface Props {
    loadSectionHandler: (sectionNum: number) => void
}

function FifthAbilitiesSection({ loadSectionHandler }: Props) {
	const [hoveredProficiency, setHoveredProficiency] = useState<1 | 2 | 3 | null>(null)

	useEffect(() => {
        loadSectionHandler(6)
    },[loadSectionHandler])

	const onMouseEnterProficiencyTitleHandler = (skillProficiencyNum: 1 | 2 | 3) => {
		setHoveredProficiency(skillProficiencyNum)
	}

	const onMouseLeaveProficiencyTitleHandler = () => {
		setHoveredProficiency(null)
	}

	return (
		<Box component='section' id="fifth-section">
			<Typography mt={3} variant="h2" component='h3' color="text.secondary" textAlign='center' display={{xs: 'block', md: 'none'}}>My Abilities</Typography>
			<Grid container spacing={{xs: 1, lg: 5}} py={{xs: 2, lg: 5}}>
				<Grid item xs={12} sm={12} md={2} textAlign="center">
					<Stack pt={{xs: 0, lg: 3}} direction="column" alignItems='center'>
						<Typography variant="body1" component='p' color="text.muted.light" display={{xs: 'none', lg: 'block'}}>HOVER</Typography>

						<StyledKeyboardArrowDownIcon sx={{ display: {xs: 'none', lg: 'block'} }} />

						<Stack direction={{xs: 'row', md: 'column'}} justifyContent='space-around' mt={{xs: 0, md: 12, lg: 3}}>
							{
								skillTitles.map(skillTitle => {
									return <ProficiencyTitle
										key={uuidv4()}
										hoveredProficiency={hoveredProficiency}
										skillProficiencyNum={skillTitle.proficiencyNum}
										onMouseEnterProficiencyTitleHandler={onMouseEnterProficiencyTitleHandler}
										onMouseLeaveProficiencyTitleHandler={onMouseLeaveProficiencyTitleHandler}
									>
										{skillTitle.title}
									</ProficiencyTitle>
								})
							}
						</Stack>
					</Stack>
				</Grid>
				
				<Grid item xs={12} sm={12} md={10} >
					<Typography mb={2} variant="h2" component='h3' color="text.secondary" textAlign='center' display={{xs: 'none', md: 'block'}}>My Abilities</Typography>

					<Stack direction='row' flexWrap='wrap' justifyContent='center'>
						{skills.map((skill: Skill) => skill.displaySkill === true && <Chip key={uuidv4()} skill={skill} hoveredProficiency={hoveredProficiency} />)}
					</Stack>

					<Typography mt={1} variant="body1" component='p' color="text.muted.main" textAlign='center' >*In constant learning of new skills and improvement on already existing ones</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

export default FifthAbilitiesSection