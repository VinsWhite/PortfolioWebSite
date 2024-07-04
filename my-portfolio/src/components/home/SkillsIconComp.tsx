import skillsAttribute from '../../assets/interface/skillsAttribute.ts'; // interface

// general reusable tag
const SkillIcon: React.FC<skillsAttribute> = ({ href, imgSrc, imgAlt }) => (
  <a 
    href={href}
    target="_blank"
    className="size-12 bg-almostWhite border-2 border-secondary shadow-sm shadow-secondary 
               p-2 rounded-full overflow-hidden flex justify-center items-center duration-300 hover:scale-110"
  >
    <img className="object-cover w-full" src={imgSrc} alt={imgAlt} />
  </a>
);

export default SkillIcon;