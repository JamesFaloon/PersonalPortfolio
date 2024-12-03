export interface Header {
    name: String,
    role: String,
    motto: String,
    divIds: String[]
}

export interface Contact {
    divIds: String[],
    title: String,
    socials: String[],
    links: String[],
    icons: String[]
}

export interface About {
    divIds: String[],
    title: String,
    description: String
}


export interface Footer {
    divIds: String[],
    title: String,
    tech: String[],
    credits: String

}