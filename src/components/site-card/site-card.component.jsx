import './site-card.styles.scss';

const SiteCard = ({title,content,imgsource,siteurl}) => {
  return (
    <div className='site-card'>
      <img src={imgsource} alt='sitepic' />
      <h2>{title}</h2>
      <p>{content}</p>
      <button className='button-49'>
      <a  href={siteurl} target='_blank' rel="noreferrer"> Visit Site</a>
      </button>
    </div>
  );
};

export default SiteCard;
