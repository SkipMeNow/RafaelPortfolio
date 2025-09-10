import styles from "./home.module.css";
import FloatingAccents from "../../components/effacts/floatingAccents/FloatingAccents";
import { HorizontalScroll } from "../../components/effacts/horizontalScroll/Horizontal-Scroll.component";
import programmingLanguagesIcon from "../../utils/programmingLanguagesIcon";
import { ScrollItemProps } from "../../components/effacts/horizontalScroll/horizontal-Scroll.types";

export const Home = () => {
  const skills = [
    { name: "javascript", link: "https://www.w3schools.com/js/" },
    { name: "css", link: "https://www.w3schools.com/css/" },
    { name: "react", link: "https://react.dev/" },
    { name: "unity", link: "https://unity.com" },
    { name: "py", link: "https://www.python.org/" },
    { name: "figma", link: "https://www.figma.com/" },
    { name: "git", link: "https://github.com/" },
    { name: "cSharp", link: "https://www.w3schools.com/cs/index.php" },
  ];

  function handleItemClick(item: ScrollItemProps): void {
    if (item.link) window.open(item.link);
  }

  return (
    <div className={styles.home}>
      <div className={styles.home__header}>
        <h1 className={styles.home__title}>Hi, I'm Rafael</h1>
        <p className={styles.home__locationText}>Location</p>
        <p className={styles.home__locationText}>I'm a software engineer</p>
        <FloatingAccents />
      </div>

      <HorizontalScroll
        className={styles.home__horizontalScroll}
        items={skills.map((lang, index) => ({
          type: "img",
          index: index,
          content: programmingLanguagesIcon[lang.name],
          alt: lang.name,
          link: lang.link,
        }))}
        onItemClick={handleItemClick}
      />
    </div>
  );
};

export default Home;
