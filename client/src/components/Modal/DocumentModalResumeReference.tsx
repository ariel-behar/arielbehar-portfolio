import Document from "../../model/Document"

import DialogContentText from '@mui/material/DialogContentText'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'


interface Props {
	documentCategory: Document['category']
    filteredDocuments: Document[]
}

function DocumentModalResumeReference({documentCategory, filteredDocuments}:Props) {
    return (
        <>
            {
                (filteredDocuments as Document[]).map((document: Document) => {
                    return <img src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/documents/${documentCategory}/${document.image}`} alt={document.title} />
                })
            }

            {
                documentCategory === 'resume'
                && <>
                    <DialogContentText
                        id="alert-dialog-description"
                        p={3}
                        px={5}
                        textAlign='center'
                    >
                        <Typography variant='h5' component='h5' color='text.secondary' mb={2}>Download My Résumé</Typography>

                        <Link href="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/content/resume.pdf" target="_blank">
                            <img style={{ height: '118px', width: 'auto', border: 'none' }} src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/icons/pdf.png" alt="PDF icon" />
                        </Link>

                    </DialogContentText>
                </>
            }
        </>
    )
}

export default DocumentModalResumeReference