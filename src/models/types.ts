import {ReactElement} from "react";

export type WorkObject = {
    title: string,
    date: number,
    preview: string,
    description: string,
    images: Array<string>,
    codePenEmbed: string | null
}

export type WorkCategory = {
    title: string,
    background: string,
    color: string,
    icon: ReactElement,
    works: Array<WorkObject>
}

export type card = {
    index: number,
    background: string,
    title: string,
    heading: string,
    body: string
}

export type certificate = {
    title: string,
    from: string,
    image: string,
    date: Date,
    link: string,
    description: string
}