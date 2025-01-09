import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>
        TM & © Lucasfilm Ltd. All Rights Reserved
      </p>
      <ul className={styles.footer_list}>
        <li>
          <a className={styles.footer_link}>Terms of Use</a>
        </li>
        <li>
          <a className={styles.footer_link}>Additional Content Information</a>
        </li>
        <li>
          <a className={styles.footer_link}>Privacy Policy</a>
        </li>
        <li>
          <a className={styles.footer_link}>Children's Online Privacy Policy</a>
        </li>
        <li>
          <a className={styles.footer_link}>Your US State Privacy Rights</a>
        </li>
        <li>
          <a className={styles.footer_link}>Disney Store | Star Wars</a>
        </li>
        <li>
          <a className={styles.footer_link}>Star Wars Helpdesk</a>
        </li>
        <li>
          <a className={styles.footer_link}>Interest-Based Ads</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;