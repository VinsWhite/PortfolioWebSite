import { useTranslation } from "react-i18next";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroductionComp() {
  const [t, i18n] = useTranslation("global");
  const currentLanguage = i18n.language;
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <motion.div
      className="order-1 md:order-2 flex flex-col justify-center md:pr-32"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h2
        className="text-4xl font-semibold text-secondary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1.5 }}
      >
        {t("introduction.greeting")}
      </motion.h2>
      <motion.h2
        className="text-3xl font-semibold text-secondary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.5 }}
      >
        {t("introduction.who")}
      </motion.h2>
      <motion.p
        className="text-lg"
        dangerouslySetInnerHTML={{ __html: t("introduction.description") }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1.5 }}
      ></motion.p>
      <motion.div
        className="flex gap-2 items-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.5 }}
      >
        <a
          href="https://www.linkedin.com/in/vincenzo-saccone-full-stack-developer/"
          target="_blank"
          className="size-8 rounded-full shadow-md shadow-secondary p-2 cursor-pointer duration-300 hover:scale-110"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/VinsWhite" target="_blank"><FaGithub className="size-8 rounded-full shadow-md shadow-secondary cursor-pointer duration-300 hover:scale-110" /></a>
        {currentLanguage === 'en' ? (
          <a
            className="bg-secondary text-white py-1 px-2 rounded-full shadow-md shadow-secondary duration-300 hover:scale-105"
            href='/cv/ENG - curriculumWithPhoto3.pdf'
            download="ENG - Curriculum Vincenzo Saccone"
          >
            {t("introduction.cv")}
          </a>
        ) : (
          <a
            className="bg-secondary text-white py-1 px-2 rounded-full shadow-md shadow-secondary duration-300 hover:scale-105"
            href='/cv/curriculum-aggiornato5.pdf'
            download="IT - Curriculum Vincenzo Saccone"
          >
            {t("introduction.cv")}
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}
