import { useTranslation } from "react-i18next";
import { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import truncateText from "../../assets/functions/truncate";
import HobbiesComp from "./HobbiesComp";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    githubLink: string;
    language: "GB" | "IT";
    technologies: { image: string; alt: string }[];
}

const ProjectsComp: React.FC = () => {
    const { t } = useTranslation("global");

    const projects: Project[] = [
        {
            id: 1,
            title: t("projects.pittari.title"),
            description: t("projects.pittari.description"),
            image: "/images/pittari-screen.png",
            githubLink: "https://github.com/VinsWhite/Pittari-WebSite",
            language: "IT",
            technologies: [
                { image: "/images/react.png", alt: "React" },
                { image: "/images/redux.png", alt: "Redux" },
                { image: "/images/sass.png", alt: "sass" },
                { image: "/images/bootstrap.png", alt: "Bootstrap" },
                { image: "/images/laravel.png", alt: "Laravel" }
            ]
        },
        {
            id: 2,
            title: t("projects.petcenter.title"),
            description: t("projects.petcenter.description"),
            image: "/images/petcenter.png",
            githubLink: "https://github.com/VinsWhite/Pet-Center",
            language: "GB",
            technologies: [
                { image: "/images/react.png", alt: "React" },
                { image: "/images/ts.png", alt: "TypeScript" },
                { image: "/images/bootstrap.png", alt: "Bootstrap" },
                { image: "/images/nodejs.png", alt: "Node.js" },
                { image: "/images/mongodb.png", alt: "mongodb" }
            ]
        },
        {
          id: 3,
          title: t("projects.gym_laravel.title"),
            description: t("projects.gym_laravel.description"),
            image: "/images/gymManagement_laravel.png",
            githubLink: "https://github.com/VinsWhite/ProgettoSett7DB",
            language: "GB",
            technologies: [
                { image: "/images/laravel.png", alt: "laravel" },
                { image: "/images/tailwind.png", alt: "tailwind.js" }
            ]
        },
        {
          id: 4,
          title: t("projects.gym_wordpress.title"),
            description: t("projects.gym_wordpress.description"),
            image: "/images/gym_wordpress.png",
            githubLink: "https://github.com/VinsWhite/ProgettoSett2DB",
            language: "IT",
            technologies: [
                { image: "/images/wordpress.png", alt: "wordpress" },
                { image: "/images/php.png", alt: "php" },
            ]
        },
        {
          id: 5,
          title: t("projects.weather.title"),
            description: t("projects.weather.description"),
            image: "/images/rainingbot.jpg",
            githubLink: "https://github.com/VinsWhite/Node.js/tree/main/WeatherBot%20-%20for%20discord",
            language: "IT",
            technologies: [
                { image: "/images/nodejs.png", alt: "nodejs" },
            ]
        },
    ];

    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const handleOpenProjectDetail = (projectId: number) => {
        setSelectedProject(projectId);
    };

    const handleCloseProjectDetail = () => {
        setSelectedProject(null);
    };

    return (
        <div className="bg-primary px-5 py-10 relative">
            <h2 className="text-secondary font-bold text-2xl">{t("projects.title")}</h2>
            <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 font-sans">
                {projects.map((project) => (
                    <div key={project.id} className="select-none cursor-pointer border border-secondary rounded-md shadow-md shadow-secondary px-1 pt-1 pb-3 duration-300 hover:scale-105">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                            <img src={project.image} alt={project.title} />
                            <h3 className="text-xl font-semibold text-center pt-2">{project.title}</h3>
                            <p className="px-3 pb-2">{truncateText(project.description, 120)}</p>
                            <div className="border-t-2 border-secondary">
                                <p className="flex justify-end gap-2 items-center font-semibold">{t("projects.lan")} {project.language === "IT" ? "IT" : "GB"}</p>
                                <div className="flex sm:flex-col py-2 lg:flex-row justify-end gap-2 items-end font-semibold">
                                    <p>{t("projects.tech")}</p>
                                    <div className="flex gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <img key={index} className="w-5" src={tech.image} alt={tech.alt} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                        <button onClick={() => handleOpenProjectDetail(project.id)} className="bg-secondary rounded-md p-2 text-white shadow-sm">{t("projects.more")}</button>
                    </div>
                ))}
                {selectedProject !== null && (
                    <ProjectDetail
                        setOpenModal={handleCloseProjectDetail}
                        title={projects[selectedProject - 1].title} 
                        description={projects[selectedProject - 1].description}
                    />
                )}
            </div>
            <HobbiesComp />
            <div>
                <h2 className="text-center underline text-">{t("projects.future")}</h2>
            </div>
        </div>
    );
};

export default ProjectsComp;
