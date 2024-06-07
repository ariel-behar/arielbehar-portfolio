import { v4 as uuidv4 } from 'uuid';

import IDocument from "../../model/Document"

import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';

interface Props {
	documentCategory: IDocument['category']
    filteredDocuments: IDocument[]
}

function DocumentModalResumeReference({documentCategory, filteredDocuments}:Props) {
    return (
        <>
            {
                (filteredDocuments as IDocument[]).map((document: IDocument) => {
                    return <img key={uuidv4()} src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/documents/${documentCategory}/${document.image}`} alt={document.title} />
                })
            }

            {
                documentCategory === 'resume'
                && <>
                    <Stack
                        id="alert-dialog-description"
                        p={3}
                        px={5}
                        textAlign='center'
                    >
                        <Typography variant='h5' component='h5' color='text.secondary' mb={2}>Download My Résumé</Typography>

                        <Link href="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/content/resume.pdf" target="_blank">
                            <img style={{ height: '118px', width: 'auto', border: 'none' }} src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/icons/pdf.png" alt="PDF icon" />
                        </Link>

                    </Stack>
                </>
            }
        </>
    )
}

export default DocumentModalResumeReference