import { useTranslation } from "react-i18next"
import HobbiesComp from "./HobbiesComp";
import { IT } from "country-flag-icons/react/1x1";
import { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import truncateText from "../../assets/functions/truncate";

export default function ProjectsComp() {
    const [t] = useTranslation("global");
    const [openModal, setOpenModal] = useState<boolean>(false);
    const pittariDescription = t("projects.pittari.description");

  return (
    <>
        <div className="bg-primary px-5 py-10 relative">
            <h2 className="text-secondary font-bold text-2xl">{t("projects.title")}</h2>
            <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 font-sans">

              <div className="select-none cursor-pointer border border-secondary rounded-md shadow-md shadow-secondary px-1 pt-1 pb-3 duration-300 hover:scale-105">
                <a href="https://github.com/VinsWhite/Pittari-WebSite" target="_blank" className="hover:opacity-75">
                  <img src="/images/pittari-screen.png" alt="pittari" />
                  <h3 className="text-xl font-semibold text-center pt-2">{t("projects.pittari.title")}</h3>
                  <p className="px-3 pb-2">{truncateText(pittariDescription, 150)}</p>
                  <div className="border-t-2 border-secondary">
                    <p className="flex justify-end gap-2 items-center font-semibold">{t("projects.lan")} <IT className="size-5" /></p>
                    <div className="flex justify-end gap-2 items-center font-semibold">
                      <p>{t("projects.tech")}</p>
                      <img className="w-5" src="/images/react.png" alt="React" />
                      <img className="w-5" src="/images/redux.png" alt="Redux" />
                      <img className="w-5" src="/images/laravel.png" alt="Laravel" />
                    </div>
                  </div>
                </a>
                <button onClick={() => setOpenModal(true)} className="bg-secondary rounded-md p-2 text-white shadow-sm">{t("projects.more")}</button>
              </div>

              {openModal && <ProjectDetail setOpenModal={setOpenModal} title={t("projects.pittari.title")} description={t("projects.pittari.description")} />}
            </div>
            <HobbiesComp />
        </div>
    </>
  )
}
