import styles from './PersonInfo.module.css';

const PersonInfo = ({ personInfo }) => {
  return (
    <>
      <ul className={styles.list__container}>
        {personInfo.map(({ title, data }) => (
          <li className={styles.list__item} key={title}>
            <span className={styles.item__title}>{title}</span>: {data}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PersonInfo;
