import { useTranslation } from "react-i18next";
import { IoIosContact } from "react-icons/io";
import { CiMail } from "react-icons/ci";

export default function HeroComp() {

    const [t] = useTranslation("global");
    
  return (
    <>
        <div className="w-2/4 bg-almostWhite shadow-md shadow-secondary rounded-md">
            <img src="/images/vincenzo.png" alt="vincenzo" />
            <div className="bg-secondary text-white p-3">
                <h2 className="text-xl">{t("hero-contacts.title")}</h2>
                <div className="flex gap-1 items-center"><IoIosContact className="size-4" /> <p>+39 392 529 5700</p></div>
                <div className="flex gap-1 items-center"><CiMail className="size-4"/> <p>vincenzosa26@icloud.com</p></div>
            </div>
        </div>
    </>
  )
}
