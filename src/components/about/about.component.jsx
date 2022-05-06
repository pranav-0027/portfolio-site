import AnimatedLetters from '../AnimatedLetters/animated-letters.component';
import './about.styles.scss';
import { useState, useEffect } from 'react';
import SiteCard from '../site-card/site-card.component';
import img1 from '../../assets/site_photos/Ecommerce_pic.png';
import img2 from '../../assets/site_photos/Merkury_pic.png';
import img3 from '../../assets/site_photos/Loruki_pic.png';
import img4 from '../../assets/site_photos/parralax_pic.png';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);
  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
            letterClass={letterClass}
          />
        </h1>
        <p>
         My name is Pranav Mitra, I'm a Front End Engineer based in Delhi, India.
          Currently pursuing my B.Ttech. degree majoring in Electronics. I wish to further my career as a web developer 
          building beautiful and intuitive websites. 
        </p>
        <p>
          I have experience with React and Context API as well as proficiency in Javascript, HTML and CSS which I have used to build an array of websites. 
          I have strong problem solving skills with knowledge of C++ that helps me make use of various data structues and algorithms to solve real life based problems.
        </p>
        <p>
          In my free time you would find me in front of a chess board or a ping pong table.
        </p>
      </div>
      <div className='sites'>
        <SiteCard
          title='Ecommerce Store'
          content='A fully functional ecommerce store that uses React.js and Context API for the frontend and NOSQL firestore data base for the backend.
        Authentication using google sign-in as well as create account and email password sign-in are integrated.'
          imgsource={img1}
          siteurl='https://marvelous-cassata-0a0b5e.netlify.app/'
        />
        <SiteCard
          title='Merkury Landing Page'
          content='A professional looking template website converted from a Photoshop Document with the help of Javascript, Html and Sass. It is responsive for devices of varying screen sized.'
          imgsource={img2}
          siteurl='https://angry-goldstine-26bc3f.netlify.app/'
        />
        <SiteCard
          title='Loruki Website'
          content='A Multipage website built for the purpose of a cloud company. Consists of various loading animations, interactive components and a fully functional user form.'
          imgsource={img3}
          siteurl='https://cloud-loruki-site.netlify.app/'
        />
        <SiteCard
          title='Parralax Website'
          content='An aesthetically pleasing landing page that gives off the effect of a parralax as we scroll through.'
          imgsource={img4}
          siteurl='https://gallant-jepsen-61bd31.netlify.app/'
        />
      </div>
    </div>
  );
};
export default About;
