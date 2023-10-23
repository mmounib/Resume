import '../../styles/Header.scss'
import {MdEmail} from 'react-icons/md'
import {AiFillPhone, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {FaMousePointer} from 'react-icons/fa'
import {BiSolidMap} from 'react-icons/bi'
import { ReactElement } from 'react';
import { HeaderInterface } from '../../interfaces/HeaderInterface'
import { Header, Contact } from '../../state/store'

interface HeaderProps {
  header: Header,
  contact: Contact,
}

const helper = ({ text, icon }: HeaderInterface): ReactElement => {
  return (
    <div className='flex-element'>
      {icon}
      <p>{text}</p>
    </div>
  );
};
const Header = ({header, contact}: HeaderProps) => {
  return (
    <section className="header">
      <div className="header-flex">
        <h1>{header.name}</h1>
        <span>{header.subName}</span>
        <div className='flex-infos'>
          {helper({ text:`${contact.email}`, icon:<MdEmail size={20}/>})} 
          {helper({text:`${contact.phone}`, icon:<AiFillPhone size={20}/>})}
          {helper({text:`${contact.location}`, icon:<BiSolidMap size={20}/>})}
          {helper({text:`${contact.linkedin}`, icon:<AiFillLinkedin size={20}/>})}
          {helper({text:`${contact.github}`, icon:<AiFillGithub size={20}/>})}
          {helper({text:`${contact.portfolio}`, icon:<FaMousePointer size={15}/>})}
        </div>
      </div>
    </section>
  )
}

export default Header