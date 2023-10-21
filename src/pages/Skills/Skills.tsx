import SkillHelper from '../../helpers/SkillHelper'
import '../../styles/Skills.scss'


const Skills = () => {
  return (
    <section className='skills-flex'>
        <h2>Skills</h2>
        <div className="skills-content">
            <SkillHelper skill='Typescript' />
            <SkillHelper skill='Javascript' />
            <SkillHelper skill='reactJs' />
            <SkillHelper skill='nextJs' />
            <SkillHelper skill='node.js' />
            <SkillHelper skill='express.js' />
            <SkillHelper skill='noSQL' />
            <SkillHelper skill='mongoDB' />
            <SkillHelper skill='SQL' />
            <SkillHelper skill='C++' />
            <SkillHelper skill='git/Github' />
            <SkillHelper skill='docker' />
            <SkillHelper skill='linux' />
        </div>
    </section>
  )
}

export default Skills