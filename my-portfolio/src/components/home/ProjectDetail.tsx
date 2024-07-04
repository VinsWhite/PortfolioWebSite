import React from "react";
import { RxCross1 } from "react-icons/rx";

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
                    <button onClick={() => setOpenModal(false)} className="size-6 m-1 pl-1 absolute top-0 right-0 bg-secondary text-white rounded-full shadow-sm"><RxCross1 /></button>
                </div>
            </div>
        </>
    );
}

export default ProjectDetail;
