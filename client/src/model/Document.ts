import { Identifiable, IdType } from "../types/common-types"

interface Document extends Identifiable<IdType> {
    _id: IdType,
    title: string,
    image: string,
    category: 'resume' | 'reference' | 'certificate',
    firm: string,
    creator: string
}

export default Document