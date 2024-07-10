interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    githubLink: string;
    language: "GB" | "IT";
    technologies: { image: string; alt: string }[];
}

export default Project;