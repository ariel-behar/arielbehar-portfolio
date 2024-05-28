import Typography from "@mui/material/Typography"
import Stack from "@mui/system/Stack"

interface Props {
    language: {
        language: string,
        flag: string,
        image: string,
        proficiencies: string
    }
}

function FlagCard({language}: Props) {
  return (
    <Stack direction='column' alignItems='center'>
        <Typography variant="body1" component='p' >{language.language}</Typography>
        <img src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/flags/${language.image}`} alt={language.flag} />
        
        <Typography variant="body2" component='p' color='text.muted'> {language.proficiencies} </Typography>
    </Stack>
  )
}

export default FlagCard