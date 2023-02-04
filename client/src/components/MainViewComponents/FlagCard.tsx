import Stack from "@mui/system/Stack"

interface Props {
    language: {
        language: string,
        flag: string,
        img: string,
        proficiencies: string
    }
}

function FlagCard({language}: Props) {
  return (
    <Stack direction='column' alignItems='center'>
        {language.language}
        <img src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/flags/${language.img}`} alt={language.flag} />
        {language.proficiencies}
    </Stack>
  )
}

export default FlagCard