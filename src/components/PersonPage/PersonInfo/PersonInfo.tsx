import styles from './PersonInfo.module.css';

interface PersonInfoData {
  title: string;
  data: string;
}

interface PersonInfoProps {
  personInfo: PersonInfoData[];
}

const PersonInfo: React.FC<PersonInfoProps> = ({ personInfo }) => {
  return (
    <section>
      <ul className={styles.list__container}>
        {personInfo.map(({ title, data }) => (
          <li className={styles.list__item} key={title}>
            <span className={styles.item__title}>{title}</span>: {data}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PersonInfo;
