import styles from './PersonImg.module.css';

const PersonImg = ({ personImg, personName }) => {
  return (
    <>
      <img src={personImg} alt={personName} />
    </>
  );
};

export default PersonImg;
