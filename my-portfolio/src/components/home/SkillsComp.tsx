import { skillsFront, skillsBack, skillsDesktop } from '../../assets/data/skills';
import SkillIcon from './SkillsIconComp';

export default function SkillsComp() {
    
  return (
    <div>
      <h2 className="text-secondary font-bold text-2xl">Technical Skills</h2>
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
    </div>
  );
}
