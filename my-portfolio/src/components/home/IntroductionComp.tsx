import { useTranslation } from "react-i18next"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import cv_eng from '../../assets/cv/ENG - curriculumWithPhoto3.pdf';
import cv_it from '../../assets/cv/curriculum-aggiornato5.pdf'

export default function IntroductionComp() {
  const [t, i18n] = useTranslation("global")
  const currentLanguage = i18n.language;

  return (
    <>
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-semibold text-secondary">{t("introduction.greeting")}</h2>
        <h2 className="text-3xl font-semibold text-secondary">{t("introduction.who")}</h2>
        <p className="text-lg">{t("introduction.description")}</p>
        <div className="flex gap-2 items-center mt-4">
          <a href="https://github.com/VinsWhite" target="_blank" className="size-8 rounded-full shadow-md shadow-secondary p-2 cursor-pointer"><FaLinkedinIn /></a>
          <a href="https://www.linkedin.com/in/vincenzo-saccone-full-stack-developer/" target="_blank"><FaGithub className="size-8 rounded-full shadow-md shadow-secondary cursor-pointer" /></a>
          {currentLanguage === 'en' ? (
            <a 
              className="bg-secondary text-white py-1 px-2 rounded-full shadow-md shadow-secondary" 
              href={cv_eng} 
              download="ENG - Curriculum Vincenzo Saccone" 
              target='_blank'>{t("introduction.cv")}
            </a>
          ) : (
            <a 
              className="bg-secondary text-white py-1 px-2 rounded-full shadow-md shadow-secondary" 
              href={cv_it} 
              download="IT - Curriculum Vincenzo Saccone" 
              target='_blank'>{t("introduction.cv")}
            </a>
          )}
        </div>
      </div>
    </>
  )
}
