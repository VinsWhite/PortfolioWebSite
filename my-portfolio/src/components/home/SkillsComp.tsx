import { useTranslation } from 'react-i18next';
import { skillsFront, skillsBack, skillsDesktop } from '../../assets/data/skills';
import SkillIcon from './SkillsIconComp';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useState, useEffect } from 'react';

export default function SkillsComp() {
  const [t] = useTranslation("global");
  const [ref, isIntersecting] = useIntersectionObserver();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isIntersecting, hasAnimated]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={hasAnimated ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 1.5 }}
    >
      <h2 className="text-secondary font-bold text-2xl">{t("skills.title")}</h2>
      <div className="ps-10 pt-2">
        <p className="uppercase font-semibold">front-end development</p>
        <div className="grid grid-cols-6 md:grid-cols-12 py-2 gap-3">
          {skillsFront.map((skill, index) => (
            <SkillIcon
              key={index}
              href={skill.href}
              imgSrc={skill.imgSrc}
              imgAlt={skill.imgAlt}
            />
          ))}
        </div>
      </div>

      <div className="ps-10 pt-3">
        <p className="uppercase font-semibold">back-end development</p>
        <div className="grid grid-cols-4 md:grid-cols-12 py-2 gap-3">
          {skillsBack.map((skill, index) => (
            <SkillIcon
              key={index}
              href={skill.href}
              imgSrc={skill.imgSrc}
              imgAlt={skill.imgAlt}
            />
          ))}
        </div>
      </div>

      <div className="ps-10 pt-3">
        <p className="uppercase font-semibold">desktop development</p>
        <div className="grid grid-cols-4 md:grid-cols-12 py-2 gap-3">
          {skillsDesktop.map((skill, index) => (
            <SkillIcon
              key={index}
              href={skill.href}
              imgSrc={skill.imgSrc}
              imgAlt={skill.imgAlt}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
