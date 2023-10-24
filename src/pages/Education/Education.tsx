import { Education } from "../../state/store";
import "../../styles/Education.scss";

const Education = ({ education }: { education: Education[] }) => {
  return (
    <section id="education" className="education-flex">
      <h2>Education</h2>
      {education.map((educ, index) => (
        <>
          <div key={index} className="education-1">
            <span key={index}>{educ.date}</span>
            <p key={index}>
              <h4>{educ.institution}</h4>, {educ.degree}
            </p>
          </div>
        </>
      ))}
    </section>
  );
};

export default Education;
