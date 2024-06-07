import { Identifiable, IdType } from "../types/common-types"

interface IThreeJsProject extends Identifiable<IdType> {
    _id: IdType
    order: number,
    title: string,
    image: string,
    description: string,
    myRole?: string,
    technologies: string[],
    month: string,
    year: number,
    url: string,
    notes: [] | [
        {
            note: string,
            hasLink?: string
        }
    ]
}

export default IThreeJsProject