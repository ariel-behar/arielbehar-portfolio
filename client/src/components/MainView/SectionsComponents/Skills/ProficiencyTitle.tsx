import getChipColor from "../../../../utils/getChipColor"

import styled from "@mui/material/styles/styled"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const StyledHoverableButtonBox = styled(Box)`
	width: 30px;
	height: 30px;
	border-radius: 50%;

	margin-top: 5px;
	margin-bottom: 10px;
`
interface Props {
    hoveredProficiency: 1 | 2 | 3 | null,
    skillProficiencyNum: 1 | 2 | 3,
    onMouseEnterProficiencyTitleHandler: (num: 1 | 2 | 3) => void,
    onMouseLeaveProficiencyTitleHandler: () => void,
    children: string
}

function ProficiencyTitle({
    hoveredProficiency,
    skillProficiencyNum,
    onMouseEnterProficiencyTitleHandler,
    onMouseLeaveProficiencyTitleHandler,
    children
}: Props
) {
    return (
        <Stack direction='column' alignItems='center' mx={1}>
            <Typography
                variant="body1"
                component='p'
                color="text.secondary"
                onMouseEnter={() => onMouseEnterProficiencyTitleHandler(skillProficiencyNum)}
                onMouseLeave={() => onMouseLeaveProficiencyTitleHandler()}
                sx={{
                    '&:hover': { cursor: 'crosshair' },
                    opacity: hoveredProficiency ? hoveredProficiency === skillProficiencyNum ? 1 : 0.2 : 1
                }}
            >
                {children}
            </Typography>
            <StyledHoverableButtonBox
                onMouseEnter={() => onMouseEnterProficiencyTitleHandler(skillProficiencyNum)}
                onMouseLeave={() => onMouseLeaveProficiencyTitleHandler()}
                sx={{
                    '&:hover': { cursor: 'crosshair' },
                    backgroundColor: getChipColor(skillProficiencyNum),
                    opacity: hoveredProficiency ? hoveredProficiency === skillProficiencyNum ? 1 : 0.2 : 1
                }}
            />
        </Stack>
    )
}

export default ProficiencyTitle