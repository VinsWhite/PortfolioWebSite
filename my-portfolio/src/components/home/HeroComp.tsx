import { useTranslation } from "react-i18next";
import { IoIosContact } from "react-icons/io";
import { CiMail } from "react-icons/ci";

export default function HeroComp() {

    const [t] = useTranslation("global");
    
  // To do: through using bounce animation talwind class, animate an arrow bottom
  // !! look at 'animate-pulse'

  return (
    <>
        <div className="order-2 md:order-1 w-3/4 sm:w-2/4 bg-almostWhite shadow-md shadow-secondary rounded-md cursor-pointer duration-300 hover:scale-95">
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
