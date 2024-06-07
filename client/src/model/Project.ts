import { Identifiable, IdType } from "../types/common-types"

interface IProject extends Identifiable<IdType> {
    _id: IdType
    order: number,
    title: string,
    image: string,
    description: string,
    myRole: string,
    technologies: string[],
    month: string,
    year: number,
    url: string,
    type: "Next" | "React" | "Wordpress" | "Shopify" | "Vanilla",
    category: "real" | "mockup",
    notes: [] | [
        {
            note: string,
            hasLink?: string
        }
    ]
}

export default IProject
