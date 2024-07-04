import { useTranslation } from "react-i18next";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";

export default function HobbiesComp() {
    const [t] = useTranslation("global");

  return (
        <div className="select-none absolute -top-1/3 right-10 bg-secondary p-10 hidden lg:block shadow-md shadow-secondary">
            <h2 className="text-white font-bold text-2xl">{t("hobbies.title")}</h2>
            <div className="pt-4 grid grid-cols-1 gap-4">
                <div className="flex justify-around items-center">
                    <FaBookReader className="size-20 text-almostWhite" />
                    <p className="text-white">{t("hobbies.reading")}</p>
                </div>
                <div className="flex justify-around items-center">
                    <MdOutlineModeOfTravel className="size-20 text-almostWhite" />
                    <p className="text-white">{t("hobbies.travel")}</p>
                </div>
                <div className="flex justify-around items-center">
                    <FaLanguage className="size-20 text-almostWhite" />
                    <p className="text-white">{t("hobbies.learning")} <br></br> {t("hobbies.lan")}</p>
                </div>
            </div>
        </div>
  )
}
