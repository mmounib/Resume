import { Language } from '../../state/store'
import '../../styles/Languages.scss'

interface LanguageProp {
  languages: Language
}
const Languages = ({languages}: LanguageProp) => {
  return (
    <section className='languages-flex'>
        <h2>languages</h2>
        <div className="language-content">
            <li><span>{languages.arabic}</span> </li>
            <li><span>{languages.english}</span> </li>
            <li><span>{languages.french}</span> </li>
        </div>
    </section>
  )
}

export default Languages