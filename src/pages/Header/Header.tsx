import '../../styles/Header.scss'
import {MdEmail} from 'react-icons/md'
import {AiFillPhone, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {FaMousePointer} from 'react-icons/fa'
import {BiSolidMap} from 'react-icons/bi'
import { ReactElement } from 'react';
import { HeaderInterface } from '../../interfaces/HeaderInterface'



const helper = ({ text, icon }: HeaderInterface): ReactElement => {
  return (
    <div className='flex-element'>
      {icon}
      <p>{text}</p>
    </div>
  );
};
const Header = () => {
  return (
    <section className="header">
      <div className="header-flex">
        <h1>mouad mounib</h1>
        <span>Full Stack Developer</span>
        <div className='flex-infos'>
          {helper({ text:"mouadmounib00@gmail.com", icon:<MdEmail size={20}/>})} 
          {helper({text:"+212646819652", icon:<AiFillPhone size={20}/>})}
          {helper({text:"Casablanca, Morocco", icon:<BiSolidMap size={20}/>})}
          {helper({text:"https://www.linkedin.com/in/mouad-mounib-954418193/", icon:<AiFillLinkedin size={20}/>})}
          {helper({text:"https://www.github.com/mmounib/ ", icon:<AiFillGithub size={20}/>})}
          {helper({text:"https://mouadmounib.vercel.app/", icon:<FaMousePointer size={15}/>})}
        </div>
      </div>
    </section>
  )
}

export default Header