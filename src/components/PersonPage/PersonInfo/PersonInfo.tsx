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
      <ul>
        {personInfo.map(({ title, data }) => (
          <li key={title}>
            <span className={styles.item_title}>{title}</span>: {data}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PersonInfo;
