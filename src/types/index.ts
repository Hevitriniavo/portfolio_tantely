import {StaticImageData} from "next/image";


export type ProjectItem = {
    title: string;
    image?: StaticImageData;
    description: string;
    language: string[];
    depo: string[];
    urlDeployed: string;
};


export type SkillItem = {
    label: string;
    level: number;
    image?: StaticImageData;
};

export type SkillGroup = {
    [subcategory: string]: SkillItem[];
};

export type SkillTree = {
    informatiques: {
        frontend: SkillGroup;
        backend: SkillGroup;
        "base de donnée": SkillGroup;
        autre: SkillGroup;
    };
    linguistiques: {
        [lang: string]: SkillItem;
    };
};
