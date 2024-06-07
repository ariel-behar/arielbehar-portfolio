
export interface ITechnology {
    technology: string,
    proficiency: number,
    image: string,
    displayTechnology: boolean
}

export interface ISkill {
    title: string,
    technologies: ITechnology[]
}
