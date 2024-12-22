import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.wrapper_footer}>
      <div className={styles.title_footer}>
        TM & © Lucasfilm Ltd. All Rights Reserved
      </div>
      <ul className={styles.list_footer}>
        <li>
          <a className={styles.link_footer}>Terms of Use</a>
        </li>
        <li>
          <a className={styles.link_footer}>Additional Content Information</a>
        </li>
        <li>
          <a className={styles.link_footer}>Privacy Policy</a>
        </li>
        <li>
          <a className={styles.link_footer}>Children's Online Privacy Policy</a>
        </li>
        <li>
          <a className={styles.link_footer}>Your US State Privacy Rights</a>
        </li>
        <li>
          <a className={styles.link_footer}>Disney Store | Star Wars</a>
        </li>
        <li>
          <a className={styles.link_footer}>Star Wars Helpdesk</a>
        </li>
        <li>
          <a className={styles.link_footer}>Interest-Based Ads</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;