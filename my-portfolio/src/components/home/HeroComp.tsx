import { useTranslation } from "react-i18next";
import { IoIosContact } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion";

export default function HeroComp() {
  const [t] = useTranslation("global");

  return (
    <motion.div
      className="order-2 md:order-1 w-5/6 sm:w-2/4 md:w-2/4 bg-almostWhite shadow-md shadow-secondary rounded-md cursor-pointer duration-300 hover:scale-95"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >
      <img src="/images/vincenzo.png" alt="vincenzo" />
      <div className="bg-secondary text-white p-3">
        <h2 className="text-xl">{t("hero-contacts.title")}</h2>
        <div className="flex gap-1 items-center">
          <IoIosContact className="size-4" />
          <a href="tel:+393925295700" className="cursor-pointer hover:underline underline-offset-2">
            <p>+39 392 529 5700</p>
          </a>
        </div>
        <div className="flex gap-1 items-center">
          <CiMail className="size-4" />
          <a href="mailto:vincenzosa26@icloud.com" className="cursor-pointer hover:underline underline-offset-2">
            <p>vincenzosa26@icloud.com</p>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
