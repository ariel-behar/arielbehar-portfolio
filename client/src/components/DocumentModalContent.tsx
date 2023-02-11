import Document from "../model/Document"

import documents from '../data/documents.json'

import styled from "@mui/material/styles/styled"

import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"

const StyledDialogContent = styled(DialogContent)`
    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/pattern1.jpg');
    background-repeat: repeat;

    padding: 0;

    img {
        width: 100%;
        height: auto;
        border-bottom: 1px solid white;
    }
`

interface Props {
	documentCategory: Document['category']
}

function DocumentModalContent({ documentCategory }: Props) {
	const filteredDocuments = (documents[documentCategory] as Document[]).filter((document: Document) => document.category === documentCategory)

	return (
		<>
			<StyledDialogContent>
				{
					(filteredDocuments as Document[]).map((document: Document) => {
						return <img src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/documents/${document.image}`} alt={document.title} />
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
								<img style={{height: '118px', width: 'auto', border: 'none'}} src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/icons/pdf.png" alt="PDF icon" />
							</Link>

						</DialogContentText>
					</>
				}
			</StyledDialogContent>
		</>
	)
}

export default DocumentModalContent