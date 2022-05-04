import './home.styles.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/animated-letters.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faPhp,
  faCss3,
  faReact,
  faJsSquare,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['r', 'a', 'n', 'a', 'v'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);
  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>

            <br />
            <span className={`${letterClass} _13`}>I'</span>
            <span className={`${letterClass} _14`}>m</span>

            <img src={LogoTitle} alt='developer' />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>

          <h2>Frontend Developer / Javascript Expert / React.js / C++</h2>
          <Link to='/contact' className='flat-button'>
            CONTACT ME
          </Link>
        </div>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faHtml5} color='#DD0031' />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faCss3} color='#F06529' />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faPhp} color='#28A4D9' />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
