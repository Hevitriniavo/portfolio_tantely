import { StaticImageData } from "next/image";

export type SkillItem  ={
    label: string;
    level: number;
    image?: StaticImageData;
}

export type Row  = {
    domain: string | null;
    domainRowSpan: number;
    category: string | null;
    categoryRowSpan: number;
    label: string;
    level: number;
    image ?: StaticImageData;
}

export type SkillsKey = "frontend" | "backend" | "database" | "others" ;

export type ProjectItem = {
    title: string;
    image?: StaticImageData;
    description: string;
    language: string[];
    depo: string[];
    urlDeployed: string;
}
