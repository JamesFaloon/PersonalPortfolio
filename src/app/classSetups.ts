export interface Header {
    name: String,
    role: String,
    motto: String,
    divIds: String[]
}

export interface About {
    divIds: String[],
    title: String,
    description: String
}

export interface ProjectPage {
    title: String,
    projectName: String
    divIds: String[],
    icons: String[]
}

export interface Contact {
    divIds: String[],
    title: String,
    socials: String[],
    links: String[],
    icons: String[]
}



export interface Footer {
    divIds: String[],
    title: String,
    tech: String[],
    credits: String

}



export interface Projects {
    projectId: number,
    title: String,
    image: String,
    description: String,
    links: String[],
    actions: String[]

}