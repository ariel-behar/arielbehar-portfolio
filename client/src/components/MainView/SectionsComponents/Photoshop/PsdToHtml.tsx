import Box from "@mui/material/Box"

function PsdToHtml() {
    return (
        <Box
            display={{ xs: 'block', lg: 'none' }}
            textAlign="center"
        >
            <Box component="img" width='100%' my={0} mx="auto" src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/icons/psd-to-html5.png" alt="PSD TO HTML Poster" />
        </Box>
    )
}

export default PsdToHtml