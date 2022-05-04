import './sidebar.styles.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { faHome,faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt='logo' />
        <img className='sub-logo' src={LogoSubtitle} alt='logo-subtitle' />
      </Link>
      <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel='noreferrer'
          href='https://www.linkedin.com/in/pranav-mitra-3489b61b9/'>
            <FontAwesomeIcon icon= {faLinkedin} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer'
          href='https://github.com/pranav-0027'>
            <FontAwesomeIcon icon= {faGithub} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer'
          href='https://discordapp.com/users/250195178848124928'>
            <FontAwesomeIcon icon= {faDiscord} color="#4d4d4e"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
