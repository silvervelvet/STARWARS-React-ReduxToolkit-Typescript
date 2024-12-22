import Slider from '../../components/HomePage/Slider/Slider';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <main className={styles.main_home}>
      <a className={styles.title_home} href="https://www.disneyplus.com/series/star-wars-skeleton-crew/5V2Mi4qOaO77?cid=DTCI-Synergy-StarWars-Site-Acquisition-Originals-US-StarWars-StarWars-EN-HomeScreenHero-StarWarsSkeletonCrew-NA">
        SKELETON CREW | NOW STREAMING
      </a>
      <Slider />
    </main>
  );
};

export default HomePage;
