import Document from "../../model/Document"

import documents from '../../data/documents.json'

import styled from "@mui/material/styles/styled"

import DocumentModalResumeReference from "./DocumentModalResumeReference"
import DocumentModalCertificate from "./DocumentModalCertificate"

import DialogContent from "@mui/material/DialogContent"

const StyledDialogContent = styled(DialogContent)`
    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/dark-pattern.jpg');
    background-repeat: repeat;

    padding: 0;

    img {
        width: 100%;
        height: auto;
        border-bottom: 1px solid white;

		&.certificate-image {
			border-bottom: none;
		}
    }
`
interface Props {
	documentCategory: Document['category']
}

function DocumentModalContent({ documentCategory }: Props) {
	const filteredDocuments = (documents[documentCategory] as Document[]).filter((document: Document) => document.category === documentCategory)

	return (
		<StyledDialogContent>
			{
				documentCategory !== 'certificate'
					? <DocumentModalResumeReference documentCategory={documentCategory} filteredDocuments={filteredDocuments} />
					: <DocumentModalCertificate filteredDocuments={filteredDocuments} />

			}
		</StyledDialogContent>
	)
}

export default DocumentModalContent