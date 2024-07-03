import React from "react";

interface ProjectDetailProps {
    setOpenModal: (isOpen: boolean) => void;
    title: string;
    description: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ setOpenModal, title, description }) => {

    return (
        <>
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-10 px-20">
                <div className="bg-white p-6 rounded-md shadow-md relative">
                    <h3 className="text-xl font-semibold mb-4">{title}</h3>
                    <p className="mb-4">{description}</p>
                    <button onClick={() => setOpenModal(false)} className="absolute top-0 right-0 bg-secondary text-white px-4 py-2 rounded-full shadow-sm">X</button>
                </div>
            </div>
        </>
    );
}

export default ProjectDetail;
