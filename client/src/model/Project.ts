import { Identifiable, Idtype } from "../types/common-types"

interface Project extends Identifiable<Idtype> {
    _id: Idtype
    order: number,
    projectName: string,
    image: string,
    description: string,
    myRole: string,
    technologies: [],
    month: string,
    year: number,
    url: string,
    type: "MPA" | "SPA" | "Bootstrap" | "Wordpress" ,
    category: "real" | "mockup",
    notes: []
}

export default Project