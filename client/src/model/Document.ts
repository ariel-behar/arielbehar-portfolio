import { Identifiable, IdType } from "../types/common-types"

interface IDocument extends Identifiable<IdType> {
    _id: IdType,
    title: string,
    image: string,
    category: 'resume' | 'reference' | 'certificate',
    firm: string,
    creator: string
}

export default IDocument