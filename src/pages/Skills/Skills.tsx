import SkillHelper from "../../helpers/SkillHelper";
import { Skill } from "../../state/store";
import "../../styles/Skills.scss";

interface SkillProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillProps) => {
  return (
    <section id="skills"className="skills-flex">
      <h2>Skills</h2>
      <div className="skills-content">
        {skills.map((skill, index) => (
          <SkillHelper key={index} skill={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
