import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div>TM & © Lucasfilm Ltd. All Rights Reserved</div>
      <ul>
        <li>
          <a>Terms of Use</a>
        </li>
        <li>
          <a>Additional Content Information</a>
        </li>
        <li>
          <a>Privacy Policy</a>
        </li>
        <li>
          <a>Children's Online Privacy Policy</a>
        </li>
        <li>
          <a>Your US State Privacy Rights</a>
        </li>
        <li>
          <a>Disney Store | Star Wars</a>
        </li>
        <li>
          <a>Star Wars Helpdesk</a>
        </li>
        <li>
          <a>Interest-Based Ads</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
