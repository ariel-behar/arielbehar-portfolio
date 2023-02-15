import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import styled from '@mui/material/styles/styled'

const StyledBonusImg = styled('img')` 
    width: 100%;
    height: auto;

    @media (max-width: 599px) {
        width: 50%;
    }
`
const StyledSignatureImg = styled('img')` 
    max-width: 50%;
    height: auto;

    @media (max-width: 599px) {
        max-width: 300px;
    }
`

interface Props {
    onClickShowDanielHandler: (bool: boolean) => void;
}

function HumbleBeginnings({ onClickShowDanielHandler }: Props) {
    return (
        <Container sx={{ padding: "32px 0"}}>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <Stack direction='row' justifyContent='center' alignItems='center' height='100%' >
                        <StyledBonusImg src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/bonus.png" alt="Bonus" />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Box px={2}>
                        <Typography variant="h2" component='h4' color='text.secondary' mb={2} textAlign='center'>Humble Beginnings</Typography>

                        <Typography
                            variant="body1"
                            component='p'
                            color='text.secondary'
                            textAlign='justify'
                            mb={1}
                            sx={{ textIndent: "40px" }}
                        >
                            When you click on the button below, the first site I ever did will be revealed to you. Not much to brag about technically, but it does hold a sentimental value to me since these were the days I was making my first baby steps into the HTML/CSS skills world and I wanted to put them in action. My nephew had just been born, and this seemed like a no-brainer to who or what my first project would be devoted to.
                        </Typography>

                        <Typography
                            variant="body1"
                            component='p'
                            color='text.secondary'
                            textAlign='justify'
                            mb={1}
                            sx={{ textIndent: "40px" }}
                        >
                            I want to use this opportunity to thank you for having looked at my portfolio, and I hope you liked what you saw. Feel free to contact me through the methods listed above about anything that may come to mind.
                        </Typography>

                        <Typography
                            variant="body1"
                            component='p'
                            color='text.secondary'
                            sx={{ textIndent: "40px" }}
                            mb={1}
                        >
                            Best regards,
                        </Typography>

                        <Stack direction='row' alignItems='center' flexWrap='wrap' px={3}>
                            <StyledSignatureImg src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/signature.png" alt="Ariel Behar Signature" />
                                
                            <Stack sx={{ width: '50%', marginLeft: 'auto' }}>
                                <Button
                                    sx={{
                                        backgroundColor: 'custom.blue.main',
                                        margin: '10px auto 0',
                                        padding: "1rem 2.4rem",
                                        boxShadow: 7
                                    }}
                                    variant='contained'
                                    size='large'
                                    onClick={() => onClickShowDanielHandler(true)}
                                >
                                    Reveal
                                </Button>
                            </Stack>
                        </Stack>

                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HumbleBeginnings