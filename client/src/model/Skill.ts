
export interface Technology {
    technology: string,
    proficiency: number,
    image: string,
    displayTechnology: boolean
}

export interface Skill {
    title: string,
    technologies: Technology[]
}
