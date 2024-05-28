import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import skills from '../../data/skills.json'

import styled from "@mui/material/styles/styled"

import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ProficiencyTitle from '../../components/Sections/Skills/ProficiencyTitle';
import GroupedSkills from '../../components/Sections/Skills/GroupedSkills';

const StyledKeyboardArrowRightIcon = styled(KeyboardArrowRightIcon)`
	color: ${(({ theme }) => theme.palette.text.muted.light)};

	position: relative;
	animation: pointDown 1.5s infinite ease-in-out;

	@keyframes pointDown {
		0% {left: 0}
		50% {left: 3px}
		100% {left: 0}
	}
`

const skillTitles: { title: string, proficiencyNum: 1 | 2 | 3 }[] = [
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
	}, [loadSectionHandler])

	const onMouseEnterProficiencyTitleHandler = (skillProficiencyNum: 1 | 2 | 3) => {
		setHoveredProficiency(skillProficiencyNum)
	}

	const onMouseLeaveProficiencyTitleHandler = () => {
		setHoveredProficiency(null)
	}

	return (
		<Box component='section' id="fifth-section">

			<Stack pt={{ xs: 2, md: 3 }} pb={{ xs: 0, md: 3 }} px={{xs: 2, md: 5}} direction={{ xs: 'column', md: 'row' }} justifyContent={{ xs: 'center', md: 'space-between' }} alignItems='center'>

				<Typography variant="h2" component='h3' color="text.secondary" textAlign='center'>My Abilities</Typography>

				<Stack direction='row' justifyContent='space-around' alignItems='center'>
					<Stack direction='column' justifyContent='center' alignItems='center' pr={2} display={{ xs: 'none', lg: 'block' }}>
						<Typography variant="body2" component='p' color="text.muted.light">HOVER</Typography>
						<StyledKeyboardArrowRightIcon />
					</Stack>

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
			<Box>
				<GroupedSkills skills={skills} hoveredProficiency={hoveredProficiency} />

				<Typography mt={1} variant="body1" component='p' color="text.muted.main" textAlign='center' >*In constant learning of new skills and improvement on already existing ones</Typography>
			</Box>
		</Box>
	)
}

export default FifthAbilitiesSection