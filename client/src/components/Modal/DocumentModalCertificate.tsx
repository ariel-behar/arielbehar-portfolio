import Document from "../../model/Document"

import Grid from '@mui/material/Grid'

interface Props {
    filteredDocuments: Document[]
}

function DocumentModalCertificate({ filteredDocuments }: Props) {
    return (
        <Grid container spacing={2} p={2}>
            {
                filteredDocuments.map((document, index) => {
                    return <Grid item xs={index === 0 || index === filteredDocuments.length - 1 ? 12 : 6} display='flex' flexDirection='column' justifyContent='center'>
                        <img className='certificate-image' src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/documents/certificate/${document.image}`} alt={document.title} />
                    </Grid>
                })
            }
        </Grid>
    )
}

export default DocumentModalCertificate