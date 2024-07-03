import { useTranslation } from "react-i18next";
import { FcReading } from "react-icons/fc";

export default function HobbiesComp() {
    const [t] = useTranslation("global");

  return (
        <div className="absolute -top-2/4 right-10 bg-secondary p-10 hidden md:block">
            <h2 className="text-white font-bold text-2xl">{t("hobbies.title")}</h2>
            <div>
                <div>
                    <FcReading className="size-20" />
                    <p className="text-white">Reading</p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
  )
}
