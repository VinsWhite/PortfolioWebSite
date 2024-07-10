import { FaRegPaperPlane } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GrMenu } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import { GB, IT } from "country-flag-icons/react/1x1";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// To Do: plane and name animation and open menu animation
// change language due to region

export default function NavbarComp() {
    const [useMenu, setUseMenu] = useState<boolean>(false);
    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    }

  return (
    <>
        <nav className="z-10 select-none flex justify-between px-3 py-4 opacity-95 bg-primary static md:fixed top-0 left-0 right-0">
            <div className="flex gap-3 items-center">
                <FaRegPaperPlane />
                <Link to='/' className="font-bold text-2xl text-secondary">Vincenzo Saccone</Link>
            </div>
            <div className="hidden md:flex gap-4 items-center">
            <NavLink 
                to='/' 
                className={({ isActive }) => (
                    'cursor-pointer text-black hover:text-gray-600 ' + 
                    (isActive ? 'hover:text-gray-800 underline underline-offset-2' : 'text-black')
                )}
            >
                {t("navbar.about")}
            </NavLink>
            <NavLink 
                to='/getintouch' 
                className={({ isActive }) => (
                    'bg-black hover:bg-gray-800 text-white font-semibold rounded-lg py-1 px-2 ' + 
                    (isActive ? 'underline underline-offset-2' : '')
                )}
            >
                {t("navbar.contact")}
            </NavLink>
                <IT title="Italian" onClick={() => handleChangeLanguage("it")} className={`size-5 cursor-pointer rounded-full ${i18n.language == 'it' ? "border-2 border-green-700 size-6" : ""}`} />
                <GB title="English" onClick={() => handleChangeLanguage("en")} className={`size-5 cursor-pointer rounded-full ${i18n.language == 'en' ? "border-2 border-secondary size-6" : ""}`} />
            </div>
            {!useMenu ? (
            <GrMenu onClick={() => setUseMenu(!useMenu)} className="block md:hidden cursor-pointer size-5"/> 
            ) : (
                <IoClose onClick={() => setUseMenu(!useMenu)} className="block md:hidden cursor-pointer size-5" />
            )}
            
        </nav>

        {useMenu && (
            <div className="bg-primary opacity-90 md:hidden flex flex-col gap-3 items-center pb-3">
                <NavLink to='/' className="cursor-pointer text-black hover:text-gray-700">{t("navbar.about")}</NavLink>
                <NavLink to='/getintouch' className="bg-black hover:bg-gray-800 text-white rounded-lg py-1 px-2">{t("navbar.contact")}</NavLink>
                <div className="flex items-center gap-3">
                    <IT title="Italian" onClick={() => handleChangeLanguage("it")} className={`size-5 cursor-pointer rounded-full ${i18n.language == 'it' ? "border-2 border-green-700 size-6" : ""}`} />
                    <GB title="English" onClick={() => handleChangeLanguage("en")} className={`size-5 cursor-pointer rounded-full ${i18n.language == 'en' ? "border-2 border-secondary size-6" : ""}`} />
                </div>
            </div>
        )}

    </>
  )
}
