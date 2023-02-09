import { Identifiable, Idtype } from "../types/common-types"

interface Project extends Identifiable<Idtype> {
    _id: Idtype
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
