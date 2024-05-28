import { useEffect } from "react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

interface Props {
	loadSectionHandler: (sectionNum: number) => void
}

function ThreeJsSection({
	loadSectionHandler
}: Props) {

	useEffect(() => {
		loadSectionHandler(5)
	}, [loadSectionHandler])

	return (
		<Box component="section">
			<Typography variant="h4" component='h4' mt={0} textAlign='center' color='text.secondary'>Three JS Projects</Typography>

		</Box>
	)
}

export default ThreeJsSection