import { Identifiable, IdType } from "../types/common-types"

interface Project extends Identifiable<IdType> {
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
    type: "MPA" | "SPA" | "Bootstrap" | "Wordpress",
    category: "real" | "mockup",
    notes: [] | [
        {
            note: string,
            hasLink?: string
        }
    ]
}

export default Project
